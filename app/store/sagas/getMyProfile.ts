import { put, call } from 'redux-saga/effects';
import getMYProfileData from 'app/services/getMyProfile';
import { Alert } from 'react-native';
import { onMyProfileData, onMyProfileDataFailed } from 'app/store/slice/getMyProfileSlice';

export default function* getMyProfileAsync(action: number): any {
    console.log("action saga?>>>??", action.payload);
    try {
        const response = yield call(getMYProfileData, action.payload);
        console.log("response >>>>>>>>> MMMMM??????", response.data);
        yield put(onMyProfileData(response.data));
    } catch (error) {
        console.log('error', error);
        yield put(onMyProfileDataFailed(error?.response));
    }
}
