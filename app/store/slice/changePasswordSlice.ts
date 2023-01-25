/* Login Reducer
 * handles login states in the app
 */
import { createSlice } from '@reduxjs/toolkit';
interface ChangeState {
    isLoggedIn: boolean;
    data: any;
    error: any;
}
const initialState: ChangeState = {
    isLoggedIn: false,
    data: null,
    error: null,
};

const changePassSlice = createSlice({
    name: 'change',
    initialState,
    reducers: {
        onChangePassRequest: (state, action) => {
            return {
                ...state,
            };
        },
        onChangePass: (state, action) => {
            return {
                ...state,
                isLoggedIn: true,
                ...action.payload,
            };
        },
        onChangePassFailed: (state, action) => {
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload,
            };
        },
    },
});

export const {  onChangePassRequest, onChangePass, onChangePassFailed } = changePassSlice.actions;
export default changePassSlice.reducer;
