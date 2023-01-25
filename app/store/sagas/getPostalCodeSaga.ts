import { put, call } from 'redux-saga/effects';
import getPostalCodeData from 'app/services/postalCode';
import { Alert } from 'react-native';
import { onGetPostalCodeData, onGetPostalCodeDataFailed } from '../slice/postalCodeSlice';

export default function* getPostalCodeDataAsync(action:any): any {
    try {
        console.log('action ',action)
        const response = yield call(getPostalCodeData,action.payload);
        yield put(onGetPostalCodeData(response));
    } catch (error) {
        yield put(onGetPostalCodeDataFailed(error?.response));
    }
}
