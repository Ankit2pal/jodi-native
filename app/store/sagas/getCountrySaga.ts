import { put, call } from 'redux-saga/effects';
import getCountryData from 'app/services/getCountry';
import { Alert } from 'react-native';
import { onGetCountryData, onGetCountryDataFailed } from 'app/store/slice/getCountrySlice';

export default function* getCountryDataAsync(): any {
    try {
        const response = yield call(getCountryData);
        yield put(onGetCountryData(response));
    } catch (error) {
        yield put(onGetCountryDataFailed(error?.response));
    }
}
