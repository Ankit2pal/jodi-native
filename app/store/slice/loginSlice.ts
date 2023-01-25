/* Login Reducer
 * handles login states in the app
 */
import { createSlice } from '@reduxjs/toolkit';
interface LoginState {
    data: any;
    error: any;
}
const initialState: LoginState = {
    data: null,
    error: null,
};

const loginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        onLoginRequest: (state, action) => {
            return {
                ...state,
            };
        },
        onLogin: (state, action) => {
            return {
                initialState,
                data: action.payload,
            };
        },
        onLoginFailed: (state, action) => {
            return {
                initialState,
                error: action.payload,
            };
        },
        onLogout: () => {
            return {
                initialState,
            };
        },
    },
});

export const { onLogin, onLoginFailed, onLoginRequest, onLogout } = loginSlice.actions;
export default loginSlice.reducer;
