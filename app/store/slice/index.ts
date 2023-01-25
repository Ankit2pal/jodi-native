/*
 * combines all th existing reducers
 */

import forgotPassSlice from './forgotPasswordSlice';
import { combineReducers } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import registerPostSlice from './registerPostSlice';
import getRegisterDataSlice from './getRegisterDataSlice';
import getCasteSlice from './getCasteSlice';
import getStateSlice from './getStateSlice';
import getCitySlice from './getCitySlice';
import getCountrySlice from './getCountrySlice';
import changePassSlice from './changePasswordSlice';
import resetPasswordSlice from './resetPasswordSlice';
import loginChangePassSlice from './loginChangePassSlice';
import mobileNumberValidSlice from './mobileNumberValidSlice';
import validateEmailSlice from './validateEmailSlice';
import getPostalCodeSlice from './postalCodeSlice'
import getNotificationSlice from './getNotificationSlice'
import getViewProfileSlice from 'app/services/getViewProfile';
import getMyProfileSlice from './getMyProfileSlice';
import getDeactivateUserSlice from './getDeactivateUserSlice';
import postDeactivateUserSlice from './postDeactivateUserSlice';
const reducers = {
    login: loginSlice,
    getRegisterData: getRegisterDataSlice,
    getCasteData: getCasteSlice,
    getStateData: getStateSlice,
    getCityData: getCitySlice,
    getCountryData: getCountrySlice,
    registerPost: registerPostSlice,
    forgotPassword: forgotPassSlice,
    changePassword: changePassSlice,
    resetPassword: resetPasswordSlice,
    loginChangePass: loginChangePassSlice,
    mobileNumberValid: mobileNumberValidSlice,
    validateEmail: validateEmailSlice,
    postalCode : getPostalCodeSlice,
    notification:getNotificationSlice,
    ViewProfileData:getViewProfileSlice,
    getMyProfile:getMyProfileSlice,
    DeactivateData: getDeactivateUserSlice,
    postdeactivateData:postDeactivateUserSlice,



};

// Exports

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
