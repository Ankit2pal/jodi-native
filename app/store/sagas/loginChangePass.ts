import { put, call } from 'redux-saga/effects';
import loginChangePassData from 'app/services/loginChangePassword'
import { Alert } from 'react-native';
import { onLoginChange, onLoginChangeFailed } from '../slice/loginChangePassSlice';

export default function* loginChangePass(action: any): any {
    console.log('Login Change action ## ', action);
    try {
        const response = yield call(loginChangePassData, action.payload.EmailId);
        if (response.status === 200) {
            yield put(onLoginChange(response));
            console.log("LoginChange Respones----->",response)
        } else {
            yield put(onLoginChangeFailed(response));
            Alert.alert('LoginChange Failed.', response.data.message);
        }
    } catch (error) {
        Alert.alert('Forgot Password Failed', error?.response.message);
        yield put(onLoginChangeFailed(error?.response));
    }
}
