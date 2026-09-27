import marimo

__generated_with = "0.25.0"
app = marimo.App(width="medium")


@app.cell
def _():
    # 1. 사용할 모듈 가져오기
    import numpy as np
    import pandas as pd
    from sklearn.datasets import fetch_california_housing
    from sklearn.model_selection import train_test_split
    from sklearn.preprocessing import StandardScaler
    from sklearn.ensemble import RandomForestRegressor
    from sklearn.metrics import mean_squared_error, r2_score

    # 2. 데이터셋 로드 및 DataFrame 생성
    california = fetch_california_housing(as_frame=True)
    df = california.frame

    # 2-1. 화면에 데이터 표시할 때 줄 나뉘지 않고 한 줄에 표시되도록
    # 가로로 표시할 최대 컬럼 수 제한 해제 (None = 전체 표시)
    pd.set_option("display.max_columns", None)

    # 각 컬럼의 최대 너비 제한 해제
    pd.set_option("display.max_colwidth", None)

    # 출력이 아래 줄로 넘어가며 나뉘는 현상 방지 (가로 폭 제한 해제)
    pd.set_option("display.width", None)

    # 실제 출력
    print(df)

    # X(특성)와 y(타겟) 분리
    # Target(MedHouseVal)의 단위는 $100,000 (10만 달러)
    X = df.drop(columns=['MedHouseVal'])
    y = df['MedHouseVal']

    # 3. 학습용/테스트용 데이터 분리 (8:2 비율)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # 4. 특성 스케일링 (StandardScaler)
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # 5. 모델 생성 및 학습 (RandomForestRegressor)
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train_scaled, y_train)

    # 6. 예측
    y_pred = model.predict(X_test_scaled)

    # 7. 평가
    mse = mean_squared_error(y_test, y_pred)
    rmse = np.sqrt(mse)
    r2 = r2_score(y_test, y_pred)

    # 8. 평가 결과 보여주기
    print("") # 한 줄 나누기
    print("--- 모델 평가 결과 ---")
    print(f"RMSE (평균 제곱근 오차): {rmse:.4f} ($100,000 단위)")
    print(f"R² Score (결정계수): {r2:.4f}")

    # 9. 주요 특성 중요도(Feature Importance) 확인
    feature_importance = pd.DataFrame({
        'Feature': X.columns,
        'Importance': model.feature_importances_
    }).sort_values(by='Importance', ascending=False)

    print("")
    print("--- 특성 중요도 순위 ---")
    print(feature_importance.to_string(index=False))
    return model, pd, scaler


@app.cell
def _(model, pd, scaler):
    new_data_dict1 = {
        'MedInc': [8.3252],        # 소득 (약 $83,252)
        'HouseAge': [41.0],         # 건령 (41년)
        'AveRooms': [6.984127],     # 평균 방 수
        'AveBedrms': [1.023810],    # 평균 침실 수
        'Population': [322.0],      # 인구 수
        'AveOccup': [2.555556],     # 평균 가구원 수
        'Latitude': [37.88],        # 위도
        'Longitude': [-122.23]      # 경도
    }

    # 11. DataFrame으로 변환 (2차원 구조 유지)
    new_data_df1 = pd.DataFrame(new_data_dict1)

    # 12. 중요: 기존 학습 데이터셋의 scaler로 동일하게 스케일링 (fit이 아닌 transform만 사용)
    new_data_scaled1 = scaler.transform(new_data_df1)

    # 13. 예측 수행
    predicted_val1 = model.predict(new_data_scaled1)[0]

    # 14. 결과 출력 (데이터셋 단위: $100,000 -> 달러 금액 환산)
    predicted_price_dollars1 = predicted_val1 * 100000

    print(f"예측 결과값 (단위: $100,000): {predicted_val1:.4f}")
    print(f"예측된 주택 가격: ${predicted_price_dollars1:,.2f}")
    return


@app.cell
def _(model, pd, scaler):
    new_data_dict2 = {
        'MedInc': [5.1258],        # 소득 (약 $83,252)
        'HouseAge': [38.0],         # 건령 (41년)
        'AveRooms': [5],     # 평균 방 수
        'AveBedrms': [1.1],    # 평균 침실 수
        'Population': [322.0],      # 인구 수
        'AveOccup': [2.555556],     # 평균 가구원 수
        'Latitude': [37.88],        # 위도
        'Longitude': [-122.23]      # 경도
    }

    # 11. DataFrame으로 변환 (2차원 구조 유지)
    new_data_df2 = pd.DataFrame(new_data_dict2)

    # 12. 중요: 기존 학습 데이터셋의 scaler로 동일하게 스케일링 (fit이 아닌 transform만 사용)
    new_data_scaled2 = scaler.transform(new_data_df2)

    # 13. 예측 수행
    predicted_val2 = model.predict(new_data_scaled2)[0]

    # 14. 결과 출력 (데이터셋 단위: $100,000 -> 달러 금액 환산)
    predicted_price_dollars2 = predicted_val2 * 100000

    print(f"예측 결과값 (단위: $100,000): {predicted_val2:.4f}")
    print(f"예측된 주택 가격: ${predicted_price_dollars2:,.2f}")
    return


if __name__ == "__main__":
    app.run()
