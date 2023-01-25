import { put, call } from 'redux-saga/effects';
import getDeactivateData from 'app/services/getDeactivateUser';
import { Alert } from 'react-native';
import { onGetDeactivateUserData, onGetDeactivateUserDataFailed } from 'app/store/slice/getDeactivateUserSlice'

export default function* DeactivateDataAsync(): any {
    try {
        const response = yield call(getDeactivateData);
        yield put(onGetDeactivateUserData(response));
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<",response.data);
        
    } catch (error) {
        yield put(onGetDeactivateUserDataFailed(error?.response));
    }
}