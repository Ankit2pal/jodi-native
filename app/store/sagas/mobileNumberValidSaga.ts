import { put, call } from 'redux-saga/effects';
import mobileNumberValidData from 'app/services/mobileNumberValidate';
import { Alert } from 'react-native';
import { onMobileNumberValid, onMobileNumberValidFailed } from '../slice/mobileNumberValidSlice';

export default function* mobileNumberValid(action: any): any {
    console.log('mobileNumberValid ## ?? ', action.payload);
    try {
        const response = yield call(mobileNumberValidData, action.payload.MobileNumber);
        console.log('saga res :::', response);
        // if (response.status === 200) {
        yield put(onMobileNumberValid(response.data));
        console.log('valid MobileRespones- *****---->', response.data);
        // } else {
        yield put(onMobileNumberValidFailed(response));
        //  Alert.alert('Mobile Number Valid Failed.', response);
        // }
    } catch (error) {
        // Alert.alert('Mobile Number Valid Failed', error?.response.message);
        yield put(onMobileNumberValidFailed(error?.response));
    }
}
