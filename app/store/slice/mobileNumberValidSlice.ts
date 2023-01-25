import { createSlice } from '@reduxjs/toolkit';
interface MobileState {
    // isLoggedIn: boolean;
    data: any;
    error: any;
}
const initialState: MobileState = {
    // isLoggedIn: false,
    data: null,
    error: null,
};

const MobileNumberValidSlice = createSlice({
    name: 'mobileNumberValid',
    initialState,
    reducers: {
        onMobileNumberValidRequest: (state, { payload }) => {
            return {
                ...state,
                MobileNumber: payload?.MobileNumber
            };
        },
        onMobileNumberValid: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onMobileNumberValidFailed: (state, action) => {
            return {
                ...state,
                error: action.payload,
            };
        },
    },
});

export const { onMobileNumberValidRequest, onMobileNumberValid, onMobileNumberValidFailed } =
    MobileNumberValidSlice.actions;
export default MobileNumberValidSlice.reducer;
