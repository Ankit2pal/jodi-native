/* Login Reducer
 * handles login states in the app
 */
import { createSlice } from '@reduxjs/toolkit';
interface resetPassState {
    isLoggedIn: boolean;
    data: any;
    error: any;
}
const initialState: resetPassState = {
    isLoggedIn: false,
    data: null,
    error: null,
};

const resetPassSlice = createSlice({
    name: 'reset',
    initialState,
    reducers: {
        onResetPassRequest: (state, action) => {
            return {
                ...state,
            };
        },
        onResetPass: (state, action) => {
            return {
                ...state,
                isLoggedIn: true,
                ...action.payload,
            };
        },
        onResetPassFailed: (state, action) => {
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload,
            };
        },
    },
});

export const {  onResetPassRequest, onResetPass, onResetPassFailed } = resetPassSlice.actions;
export default resetPassSlice.reducer;
