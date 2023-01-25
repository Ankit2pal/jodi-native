import { put, call } from 'redux-saga/effects';
import getViewProfileData from 'app/services/getViewProfile';
import { Alert } from 'react-native';
import {  onGetViewProfileDataRequest, onGetViewProfileData, onGetViewProfileDataFailed} from 'app/store/slice/getViewProfileSlice';

export default function* getViewProfileAsync(action: number): any {
    try {
        const response = yield call(getViewProfileData,action.payload.userId);

        yield put(onGetViewProfileData(response));
        console.log("response>>>>>>>>>>>>>>",response);
        
    } catch (error) {
        yield put(onGetViewProfileDataFailed(error?.response));
    }
}
