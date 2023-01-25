import { put, call } from 'redux-saga/effects';
import getCasteData from 'app/services/getCaste';
import { Alert } from 'react-native';
import { onGetCasteData, onGetCasteDataFailed } from 'app/store/slice/getCasteSlice';

export default function* getCasteDataAsync(action: number): any {
    try {
        const response = yield call(getCasteData, action.payload);
        yield put(onGetCasteData(response));
    } catch (error) {
        yield put(onGetCasteDataFailed(error?.response));
    }
}
