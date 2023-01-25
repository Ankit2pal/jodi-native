/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import getRegisterData from './getRegisterDataSaga';
import getCasteData from './getCasteSaga';
import getStateData from './getStateSaga';
import getMyProfileAsync from './getMyProfile'
import getCityData from './getCitySaga';
import getCountryData from './getCountrySaga';
import getNotification from './getNotificationSaga';
import getViewProfileAsync from './getViewProfile'
import loginSaga from './loginSaga';
import registerPost from './registerPostSaga';
import forgotAsync from './forgotPsswordSaga';
import changePassAsync from './changePasswordSaga';
import resetPassAsync from './resetPasswordSaga';
import loginChangePass from './loginChangePass';
import mobileNumberValid from './mobileNumberValidSaga';
import validateEmail from './validateEmailSaga';
import getPostalCodeDataAsync from './getPostalCodeSaga';
import DeactivateDataAsync from './getDeactivateUserSaga';  
import postDeactivateAsync from './postDeactivateUserSaga';
import { onGetRegisterDataRequest } from '../slice/getRegisterDataSlice';
import { onGetCasteDataRequest } from '../slice/getCasteSlice';
import { onGetStateDataRequest } from '../slice/getStateSlice';
import { onGetCityDataRequest } from '../slice/getCitySlice';
import { onGetCountryDataRequest } from '../slice/getCountrySlice';
import { onLoginRequest } from '../slice/loginSlice';
import { onForgotRequest } from '../slice/forgotPasswordSlice';
import { onRegisterPostRequest, registerationStep2 } from '../slice/registerPostSlice';
import { onChangePassRequest } from '../slice/changePasswordSlice';
import { onResetPassRequest } from '../slice/resetPasswordSlice';
import { onLoginChangeReq } from '../slice/loginChangePassSlice';
import { onMobileNumberValidRequest } from '../slice/mobileNumberValidSlice';
import { onValidateEmailRequest } from '../slice/validateEmailSlice';
import { onGetPostalCodeDataRequest } from '../slice/postalCodeSlice';
import { onGetgetNotificationRequest } from '../slice/getNotificationSlice';
// import {onGetViewProfileDataRequest} from '../../store/slice/getViewProfileSlice'
import {onMyProfileDataRequest} from '../../store/slice/getMyProfileSlice'
import {onGetViewProfileDataRequest} from '../../store/slice/getViewProfileSlice';
import { onGetDeactivateUserDataRequest } from '../slice/getDeactivateUserSlice';
import { onpostDeactivateRequest } from '../slice/postDeactivateUserSlice';
import registerPostAsync from './registerPostSaga';

export default function* watch() {
    yield all([takeEvery(onGetRegisterDataRequest, getRegisterData)]);
    yield all([takeEvery(onGetCasteDataRequest, getCasteData)]);
    yield all([takeEvery(onGetStateDataRequest, getStateData)]);
    yield all([takeEvery(onGetCityDataRequest, getCityData)]);
    yield all([takeEvery(onGetCountryDataRequest, getCountryData)]);
    yield all([takeEvery(onLoginRequest, loginSaga)]);
    yield all([takeLatest(onForgotRequest, forgotAsync)]);
    yield all([takeEvery(onRegisterPostRequest, registerPost)]);
    yield all([takeEvery(onChangePassRequest, changePassAsync)]);
    yield all([takeEvery(onResetPassRequest, resetPassAsync)]);
    yield all([takeEvery(onLoginChangeReq, loginChangePass)]);
    yield all([takeEvery(onMobileNumberValidRequest, mobileNumberValid)]);
    yield all([takeEvery(onValidateEmailRequest, validateEmail)]);
    yield all([takeEvery(onGetPostalCodeDataRequest, getPostalCodeDataAsync)]);
    yield all([takeEvery(onGetgetNotificationRequest, getNotification)]);
    yield all([takeEvery(onGetViewProfileDataRequest, getViewProfileAsync)]);
    yield all([takeEvery(onMyProfileDataRequest, getMyProfileAsync)]);
    yield all([takeEvery(onGetDeactivateUserDataRequest, DeactivateDataAsync)]);
    yield all([takeEvery(onpostDeactivateRequest, postDeactivateAsync)]);
    yield all([takeEvery(registerationStep2, registerPostAsync)]);
}

 

