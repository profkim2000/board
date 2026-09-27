import marimo

__generated_with = "0.25.0"
app = marimo.App()


@app.cell
def _():
    import glob
    import os
    import cv2
    import numpy as np
    import marimo as mo
    from skimage.feature import hog
    from sklearn.model_selection import train_test_split
    from sklearn.ensemble import HistGradientBoostingClassifier, RandomForestClassifier
    from sklearn.svm import SVC
    from sklearn.metrics import accuracy_score

    # 해상도를 128x128로 상향
    IMAGE_SIZE = (512, 512)
    return (
        HistGradientBoostingClassifier,
        IMAGE_SIZE,
        accuracy_score,
        cv2,
        glob,
        hog,
        mo,
        np,
        train_test_split,
    )


@app.cell
def _(IMAGE_SIZE, cv2, hog):
    def extract_features_from_array(img_array):
        if img_array is None:
            return None
        gray = cv2.cvtColor(img_array, cv2.COLOR_BGR2GRAY)
        resized = cv2.resize(gray, IMAGE_SIZE)

        features = hog(
            resized,
            orientations=12,
            pixels_per_cell=(4, 4),
            cells_per_block=(2, 2),
            transform_sqrt=True,
            block_norm="L2-Hys"
        )
        return features

    def extract_features_from_file(image_path):
        img = cv2.imread(image_path)
        return extract_features_from_array(img)

    return extract_features_from_array, extract_features_from_file


@app.cell
def _(
    HistGradientBoostingClassifier,
    accuracy_score,
    extract_features_from_file,
    glob,
    np,
    train_test_split,
):
    pos_paths = glob.glob("./dataset/dogun/*.jpg") + glob.glob("./dataset/dogun/*.png")
    neg_paths = glob.glob("./dataset/negative/*.jpg") + glob.glob("./dataset/negative/*.png")

    X, y = [], []

    for p in pos_paths:
        feat = extract_features_from_file(p)
        if feat is not None:
            X.append(feat)
            y.append(1)

    for p in neg_paths:
        feat = extract_features_from_file(p)
        if feat is not None:
            X.append(feat)
            y.append(0)

    X = np.array(X)
    y = np.array(y)

    model = None
    train_status = f"데이터 수 부족! 현재 준비된 이미지: positive={len(pos_paths)}, negative={len(neg_paths)}"

    if len(X) >= 10 and len(np.unique(y)) > 1:
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )

        # 복잡한 HOG 패턴 추출에 더 강한 HistGradientBoosting 모델 적용
        model = HistGradientBoostingClassifier(
            max_iter=100,
            learning_rate=0.1,
            random_state=42
        )
        model.fit(X_train, y_train)

        y_pred = model.predict(X_test)
        acc = accuracy_score(y_test, y_pred)
        train_status = f"학습 완료! (총 {len(X)}장 학습) -> 검증 정확도: {acc * 100:.2f}%"
    return model, train_status


@app.cell
def _(mo, train_status):
    mo.md(f"""
    ### 모델 학습 상태: **{train_status}**
    """)
    return


@app.cell
def _(mo):
    uploader = mo.ui.file(
        filetypes=[".png", ".jpg", ".jpeg"],
        label="새로운 이미지를 업로드하여 물체 A 유무 판별하기"
    )
    uploader
    return (uploader,)


@app.cell
def _(cv2, extract_features_from_array, mo, model, np, uploader):
    output = mo.md("이미지를 업로드하면 결과가 아래에 표시됩니다.")

    if uploader.value and model is not None:
        uploaded_file = uploader.value[0]
        image_bytes = uploaded_file.contents

        nparr = np.frombuffer(image_bytes, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        _feat = extract_features_from_array(img)

        if _feat is not None:
            pred = model.predict([_feat])[0]

            # HistGradientBoosting 확률 추정
            prob = model.predict_proba([_feat])[0]

            result_text = (
                f"🟢 **물체 A가 존재합니다!** (확률: {prob[1]*100:.1f}%)"
                if pred == 1
                else f"🔴 **물체 A가 없습니다.** (확률: {prob[0]*100:.1f}%)"
            )

            output = mo.vstack([
                mo.image(src=image_bytes, width=300),
                mo.md(f"### 결과: {result_text}")
            ])
        else:
            output = mo.md("❌ 특성을 추출하지 못했습니다.")

    elif uploader.value and model is None:
        output = mo.md("⚠️ 모델 학습 조건이 충족되지 않았습니다.")

    output
    return


if __name__ == "__main__":
    app.run()
