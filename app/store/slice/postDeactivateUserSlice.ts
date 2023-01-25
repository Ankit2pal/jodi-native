import { createSlice } from '@reduxjs/toolkit';
interface postDeactivateState {
    // isLoggedIn: boolean;
    data: any;
    error: any;
}
const initialState: postDeactivateState = {
    // isLoggedIn: false,
    data: null,
    error: null,
};

const postDeactivateSlice = createSlice({
    name: 'Deactivate',
    initialState,
    reducers: {
        onpostDeactivateRequest: (state, action) => {
            console.log('onpostDeactivateRequest---->', state, action);
            return {
                ...state,
            };
        },
        onpostDeactivate: (state, action) => {
            console.log('onpostDeactivate >>>>>>>', action.payload);
            return {
                ...state,
                data: action.payload,
                error:''
            };
        },
        onpostDeactivateFailed: (state, action) => {
            console.log('onpostDeactivateFailed', action.payload);
            return {
                ...state,
                data: '',
                error: action.payload,
            };
        },
    },
});

export const { onpostDeactivateRequest, onpostDeactivate, onpostDeactivateFailed } =
    postDeactivateSlice.actions;
export default postDeactivateSlice.reducer;
