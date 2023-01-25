import { createSlice } from '@reduxjs/toolkit';
interface loginChangeState {
    isLoggedIn: boolean;
    data: any;
    error: any;
}
const initialState: loginChangeState = {
    isLoggedIn: false,
    data: null,
    error: null,
};

const loginChangePassSlice = createSlice({
    name: 'loginChange',
    initialState,
    reducers: {
        onLoginChangeReq: (state, action) => {
            return {
                ...state,
            };
        },
        onLoginChange: (state, action) => {
            return {
                ...state,
                isLoggedIn: true,
                ...action.payload,
            };
        },
        onLoginChangeFailed: (state, action) => {
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload,
            };
        },
    },
});

export const { onLoginChangeReq, onLoginChange, onLoginChangeFailed } = loginChangePassSlice.actions;
export default loginChangePassSlice.reducer;
