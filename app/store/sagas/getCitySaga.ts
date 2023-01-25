import { put, call } from 'redux-saga/effects';
import getCityData from 'app/services/getCity';
import { Alert } from 'react-native';
import { onGetCityData, onGetCityDataFailed } from 'app/store/slice/getCitySlice';

export default function* getCityDataAsync(action: any): any {
    try {
        const response = yield call(getCityData, action.payload);
        yield put(onGetCityData(response));
    } catch (error) {
        yield put(onGetCityDataFailed(error?.response));
    }
}
