/* Login Reducer
 * handles login states in the app
 */
import { createSlice } from '@reduxjs/toolkit';
interface RegisterPostState {
    data: any;
    error: any;
}
const initialState: RegisterPostState = {
    data: null,
    error: null,
};

const registerPostSlice = createSlice({
    name: 'register post',
    initialState,
    reducers: {
        shortRegistration: (state, { payload }) => {
            return {
                ...state,
                FullName: payload?.FullName,
                GenderId: payload?.GenderId,
                MobileNumber: payload?.MobileNumber
            };
        },

        registerationStep1: (state, { payload }) => {
            return {
                ...state,
                FullName: payload?.FullName,
                GenderId: payload?.GenderId,
                MobileNumber: payload?.MobileNumber,
                ProfileFor: payload?.ProfileFor,
                DOB: payload?.DOB,
                email:payload?.email
            };
        },
     
        registerationStep2: (state, { payload }) => {
            return {
                ...state,
                               
            };
        },
        onRegisterPostRequest: (state, action) => {
            return {
                ...state,
            };
        },
        onRegisterPost: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onRegisterPostFailed: (state, action) => {
            return {
                ...state,
                error: action.payload,
            };
        },
    },
});

export const { shortRegistration, onRegisterPostRequest, onRegisterPost, onRegisterPostFailed, registerationStep1, registerationStep2 } =
    registerPostSlice.actions;
export default registerPostSlice.reducer;
