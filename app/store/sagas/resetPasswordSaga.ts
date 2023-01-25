import { put, call } from 'redux-saga/effects';
import resetPassData from 'app/services/resetPassword';
import { Alert } from 'react-native';
import { onResetPass, onResetPassFailed } from '../slice/resetPasswordSlice';

export default function* resetPassAsync(action: any): any {
    console.log('ChangePassword action ## ', action);
    try {
        const response = yield call(resetPassData, action.payload.password);
        if (response.status === 200) {
            yield put(onResetPass(response.data));
            console.log("response>>>>>>>>>>>>>>>>",response.data);
        } else {
            yield put(onResetPassFailed(response.data));
            console.log("response",response.data);
            
            // Alert.alert('Change Password Failed.', response.data.message);
        }
    } catch (error) {
        // Alert.alert('Change Password Failed', error?.response.data.message);
        yield put(onResetPassFailed(error?.response?.data));
    }
}
