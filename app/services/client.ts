import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://www.jodibanao.in/api/',
    responseType: 'json',
    withCredentials: true,
});

const apiToken = 'bkVmNUxPdGtRYTJiZlB6WURPMWN5M0E5RGJNQ3pOMk1ra3B4UEcxQQ==';
const headers = {
    'X-CSCAPI-KEY': apiToken,
};

const apiClientState = axios.create({
    baseURL: 'https://api.countrystatecity.in/',
    responseType: 'json',
    withCredentials: true,
    headers: headers,
});

const allApi = {
    LOGIN: 'Login',
    GETREGISTERDATA: 'Register/GetRegisterDetails',
    GETCASTE: 'Casts/',
    GETSTATE: 'v1/countries',
    GETCITY: 'v1/countries',
    GETCOUNTRY: 'v1/countries',
    RegisterPost: 'Register/PostRegister',
    // FORGOTPASSWORD: ': https://www.jodibanao.in/api/Users/ValidateMobile',
    REGISTERPOST: 'Register/PostRegister',
    FORGOTPASSWORD: 'Users/ValidateEmail',
    CHANGEPASSWORD: 'Register/ChangePassword',
    RESETPASSWORD: 'Login/ResetPassword',
    LOGINCHANGEPASSWORD: 'Login/ChangePassword',
    MOBILENUMBERVALIDATE: 'Users/ValidateMobile',
    VALIDATEEMAIL: 'Users/ValidateEmail',
    POSTALCODE:'/pincode/',
    NOTIFICATION: 'Notifications/GetNotification',
    // VIEWPROFILE:'Users/GetUserPackage/',
    MYPROFILE:'Users/',
    VIEWPROFILE:'Users/GetUserPackage/?userId=21caae17-2a47-4188-ac89-1ce850ff74d8',
    DEACTIVATEUSER:'Deactivate',   
    POSTDEACTIVATE:'/DeactivateDtl/PostDeactivateTypeDtl',                                               
};

export { apiClient, allApi, apiClientState };
