# knn.py
import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# IQR 방법을 사용하여 이상치 제거
def remove_outliers_iqr(data, column):
    Q1 = data[column].quantile(0.25)
    Q3 = data[column].quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    data = data[(data[column] >= lower_bound) & (data[column] <= upper_bound)]
    return data


# 데이터 전처리 및 모델 초기화
class KNNModel:
    def __init__(self, data_path):
        # 데이터 파일 불러오기
        self.data = pd.read_csv(data_path)

        # 데이터에서 #N/A를 NaN으로 대체,결측치가 있는 행 제거
        self.data = self.data.replace('#N/A', np.nan).dropna()

        # 이상치 제거
        self.data = remove_outliers_iqr(self.data, 'total-expense')
        self.data = remove_outliers_iqr(self.data, 'average-day-of-staying')

        # Standard Scaler
        self.scaler = StandardScaler()

        # KNN
        self.model = NearestNeighbors(n_neighbors=3)

        # 스케일링 및 피팅 과정
        self.data_scaled = self.scaler.fit_transform(self.data[['total-expense', 'average-day-of-staying']])
        self.model.fit(self.data_scaled)

    def predict(self, total_expense, average_days):
        # 입력 데이터를 DataFrame으로 변환
        input_data_df = pd.DataFrame([[total_expense, average_days]], columns=['total-expense', 'average-day-of-staying'])
        
        # 입력 데이터 스케일링 및 예측
        input_data_scaled = self.scaler.transform(input_data_df)
        distances, indices = self.model.kneighbors(input_data_scaled)

        
        return self.data.iloc[indices[0]]





