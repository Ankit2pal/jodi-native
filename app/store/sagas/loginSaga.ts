import { put, call } from 'redux-saga/effects';
import { onLogin, onLoginFailed } from '../slice/loginSlice';
import loginUser from '../../services/loginUser';
import { Alert } from 'react-native';

export default function* loginAsync(action: any): any {
    console.log('action', action);
    try {
        const response = yield call(loginUser, action.payload.EmailId, action.payload.PasswordHash);
        console.log('login saga', response);
        // // if (response.status === 200) {
        yield put(onLogin(response.data));
        // //} else {
        // yield put(onLoginFailed(response.data));
        // Alert.alert('Login Failed.', response.Message);
        // //}
    } catch (error) {
        Alert.alert('Login Failed.', error?.response?.data.Message);
        yield put(onLoginFailed(error?.response?.data.Message));
        console.log('error :::', error);
    }
}
