import { put, call } from 'redux-saga/effects';
import changePasswordData from 'app/services/changePassword';
import { Alert } from 'react-native';
import { onChangePass,onChangePassFailed } from 'app/store/slice/changePasswordSlice'

export default function* changePassAsync(action: any): any {
    console.log('ChangePassword action ## ', action);
    try {
        const response = yield call(changePasswordData, action.payload.OldPassword,action.payload.NewPassword,action.payload.UserId);
        if (response.status === 200) {
            yield put(onChangePass(response));
            console.log("response>>>>>>>>>>>>>>>>",response?.data);
        } else {
            yield put(onChangePassFailed(response?.data));
            console.log("response",response?.data);
            
            // Alert.alert('Change Password Failed.', response.data.message);
        }
    } catch (error) {
        // Alert.alert('Change Password Failed', error?.response.data.message);
        yield put(onChangePassFailed(error?.response?.data?.message));
    }
}
