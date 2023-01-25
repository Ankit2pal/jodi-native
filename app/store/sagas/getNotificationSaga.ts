import { put, call } from 'redux-saga/effects';
import getNotificationData from 'app/services/getNotification';
import { Alert } from 'react-native';
import {  onGetgetNotification, onGetgetNotificationFailed } from 'app/store/slice/getNotificationSlice';

export default function* getNotification(action: number): any {
    try {
        const response = yield call(getNotificationData);
        yield put(onGetgetNotification(response));
    } catch (error) {
        yield put(onGetgetNotificationFailed(error?.response));
    }
}
