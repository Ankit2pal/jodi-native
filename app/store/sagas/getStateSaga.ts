import { put, call } from 'redux-saga/effects';
import getStateData from 'app/services/getState';
import { Alert } from 'react-native';
import { onGetStateData, onGetStateDataFailed } from 'app/store/slice/getStateSlice';

export default function* getStateDataAsync(action: any): any {
    try {
        const response = yield call(getStateData, action.payload);
        yield put(onGetStateData(response));
    } catch (error) {
        yield put(onGetStateDataFailed(error?.response));
    }
}
