import { put, call } from 'redux-saga/effects';
import forgotPasswordData from 'app/services/forgotPassword';
import { Alert } from 'react-native';
import { onForgot, onForgotFailed } from 'app/store/slice/forgotPasswordSlice';

export default function* forgotAsync(action: any): any {
    console.log('Forgot action ## ', action);
    try {
        const response = yield call(forgotPasswordData, action.payload.EmailId);
        if (response.status === 200) {
            yield put(onForgot(response));
            console.log("forgotRespones----->",response)
        } else {
            yield put(onForgotFailed(response));
            Alert.alert('Forgot Password Failed.', response);
        }
    } catch (error) {
        Alert.alert('Forgot Password Failed', error?.response.message);
        yield put(onForgotFailed(error?.response));
    }
}
