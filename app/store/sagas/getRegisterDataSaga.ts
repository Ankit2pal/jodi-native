import { put, call } from 'redux-saga/effects';
import getRegisterData from 'app/services/getRegisterData';
import { Alert } from 'react-native';
import { onGetRegisterData, onGetRegisterDataFailed } from 'app/store/slice/getRegisterDataSlice';

export default function* getRegisterDataAsync(): any {
    try {
        const response = yield call(getRegisterData);
        yield put(onGetRegisterData(response));
    } catch (error) {
        yield put(onGetRegisterDataFailed(error?.response));
    }
}
