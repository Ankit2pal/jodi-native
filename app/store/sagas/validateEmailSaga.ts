import { put, call } from 'redux-saga/effects';
import validateEmailData from 'app/services/validateEmail'
import { Alert } from 'react-native';
import { onValidateEmail, onValidateEmailFailed } from '../slice/validateEmailSlice';

export default function* validateEmail(action: any): any {
    console.log('valida email action ## ', action.payload.EmailId);
    try {
        const response = yield call(validateEmailData, action.payload.EmailId);
        if (response.status === 200) {
            yield put(onValidateEmail(response.data));
            console.log("Validate Respones----->",response.data)
        } else {
            yield put(onValidateEmailFailed(response));
            Alert.alert('Validate Email Failed.', response);
        }
    } catch (error) {
        Alert.alert('Validate Email Failed', error?.response);
        yield put(onValidateEmailFailed(error?.response));
    }
}
