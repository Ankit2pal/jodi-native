import { createSlice } from '@reduxjs/toolkit';
interface ValidEmailState {
    // isLoggedIn: boolean;
    data: any;
    error: any;
}
const initialState: ValidEmailState = {
    // isLoggedIn: false,
    data: null,
    error: null,
};

const validateEmailSlice = createSlice({
    name: 'validateEmail',
    initialState,
    reducers: {
        onValidateEmailRequest: (state, action) => {
            return {
                ...state,
            };
        },
        onValidateEmail: (state, action) => {
            console.log('state, action----------', state, action);
            return {
                ...state,
                data: action.payload,
            };
        },
        onValidateEmailFailed: (state, action) => {
            return {
                ...state,
                error: action.payload,
            };
        },
    },
});

export const { onValidateEmailRequest, onValidateEmail, onValidateEmailFailed } =
    validateEmailSlice.actions;
export default validateEmailSlice.reducer;
