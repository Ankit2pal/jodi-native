import { put, call } from 'redux-saga/effects';
import { onRegisterPost, onRegisterPostFailed } from '../slice/registerPostSlice';
import registerPostData from 'app/services/registerPost';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
export default function* registerPostAsync(action: any): any {
    const getRegisterData = useSelector((state) => state.getRegisterData);
    console.log("fasdfasdf",getRegisterData);
    
    try {
        const response = yield call(
            registerPostData,
            action.payload.FullName,
            action.payload.GenderId,
            action.payload.mobilenumber,
        );
        if (response.status === 200) {
            yield put(onRegisterPost(response.data));
        } else {
            yield put(onRegisterPostFailed(response));
            Alert.alert('register post Failed.', response);
        }
    } catch (error) {
        Alert.alert('register post Failed.', error?.response);
        yield put(onRegisterPostFailed(error?.response));
    }
}
