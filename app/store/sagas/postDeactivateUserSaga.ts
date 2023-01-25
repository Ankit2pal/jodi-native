import { put, call } from 'redux-saga/effects';
import postDeactivateData from 'app/services/postDeactivateUser';
import { Alert } from 'react-native';
import { onpostDeactivate, onpostDeactivateFailed } from '../slice/postDeactivateUserSlice';

export default function* postDeactivateAsync(action: any): any {
    console.log(
        'action  saga ## ',
        action.payload.UserId,
        action.payload.DeactiveTypeId,
        action.payload.DeactiveReason,
    );
    try {
        const response = yield call(
            postDeactivateData,
            action.payload.DeactiveTypeId,
            action.payload.DeactiveReason,
            action.payload.UserId,
        );
        console.log('response  dev saga', response.data);
        // if (response.status === 200) {
        yield put(onpostDeactivate(response.data));
        // console.log("onpostDeactivate>>>>>>>>>>>>>>>>",response?.data);
        //  } else {
       // yield put(onpostDeactivateFailed(response.data));
        // console.log("onpostDeactivateFailed",response?.data);

        // Alert.alert('Change Password Failed.', response.data.message);
        // }
    } catch (error) {
        console.log("error saga",error.response?.data?.Message)
        yield put(onpostDeactivateFailed(error.response?.data?.Message));
        Alert.alert('User Deactive Failed', error.response?.data?.Message);
    }
}


