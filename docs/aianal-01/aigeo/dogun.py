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
    from sklearn.svm import SVC
    from sklearn.metrics import accuracy_score

    # 이미지 기본 리사이즈 크기 설정
    IMAGE_SIZE = (1024, 1024)
    return (
        IMAGE_SIZE,
        SVC,
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
        """OpenCV 이미지 배열(BGR)을 받아 HOG 특성을 추출합니다."""
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
        """이미지 경로를 받아 HOG 특성을 추출합니다."""
        img = cv2.imread(image_path)
        return extract_features_from_array(img)

    return extract_features_from_array, extract_features_from_file


@app.cell
def _(
    SVC,
    accuracy_score,
    extract_features_from_file,
    glob,
    np,
    train_test_split,
):
    pos_paths = glob.glob("./dataset/dogun/*.jpg") + glob.glob("./dataset/dogun/*.png")
    neg_paths = glob.glob("./dataset/negative/*.jpg") + glob.glob("./dataset/negative/*.png")

    X = []
    y = []

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
    train_status = "데이터가 부족합니다. ./dataset/dogun 및 ./dataset/negative 폴더를 확인해 주세요."

    if len(X) > 0 and len(np.unique(y)) > 1:    
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)    

        model = SVC(kernel="rbf", C=10.0, gamma=0.01, class_weight="balanced", random_state=42)
        model.fit(X_train, y_train)

        y_pred = model.predict(X_test)
        acc = accuracy_score(y_test, y_pred)
        train_status = f"학습 완료! 검증 정확도: {acc * 100:.2f}%"

    print(train_status)
    return feat, model


@app.cell
def _(mo):
    uploader = mo.ui.file(
        filetypes=[".png", ".jpg", ".jpeg"],
        label="새로운 이미지를 업로드하여 도근점 유무 판별하기"
    )
    uploader
    return (uploader,)


@app.cell
def _(cv2, extract_features_from_array, feat, mo, model, np, uploader):
    # 결과를 담을 변수 초기화
    output = mo.md("이미지를 업로드하면 결과가 아래에 표시됩니다.")

    if uploader.value and model is not None:
        uploaded_file = uploader.value[0]
        image_bytes = uploaded_file.contents

        nparr = np.frombuffer(image_bytes, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        _feat = extract_features_from_array(img)

        if _feat is not None:
            pred = model.predict([_feat])[0]
            score = model.decision_function([feat])[0]  # 양수일수록 물체 A일 확률이 높음

            # 점수를 Sigmoid 함수를 이용해 0~100% 확률 값처럼 변환 (선택 사항)
            prob_percent = (1 / (1 + np.exp(-score))) * 100

            result_text = (
                f"🟢 사진 내에 **도근점이 존재합니다!** (신뢰도: {prob_percent:.1f}%)"
                if pred == 1
                else f"🔴 사진 내에 **도근점이 없습니다.** (신뢰도: {100 - prob_percent:.1f}%)"
            )


            # UI 레이아웃을 output 변수에 저장
            output = mo.vstack([
                mo.image(src=image_bytes, width=300),
                mo.md(f"### 결과: {result_text}")
            ])
        else:
            output = mo.md("❌ 이미지에서 특성을 추출하지 못했습니다.")

    elif uploader.value and model is None:
        output = mo.md("⚠️ 모델이 아직 학습되지 않았습니다.")

    # 셀의 마지막 줄에서 UI 객체를 평가해야 화면에 출력됩니다.
    output
    return


if __name__ == "__main__":
    app.run()
