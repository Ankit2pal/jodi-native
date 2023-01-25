import { createSlice } from '@reduxjs/toolkit';
interface GetViewProfileDataState {
    data: any;
    error: any;
}
const initialState: GetViewProfileDataState = {
    data: null,
    error: null,
};

const getViewProfileSlice = createSlice({
    name: 'Get ViewProfile data',
    initialState,
    reducers: {
        onGetViewProfileDataRequest: (state) => {
            return {
                ...state,
            };
        },
        onGetViewProfileData: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onGetViewProfileDataFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onGetViewProfileDataRequest, onGetViewProfileData, onGetViewProfileDataFailed } =
    getViewProfileSlice.actions;
export default getViewProfileSlice.reducer;
