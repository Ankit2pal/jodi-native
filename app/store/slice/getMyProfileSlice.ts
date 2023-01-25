import { createSlice } from '@reduxjs/toolkit';
interface GetMyProfileDataState {
    data: any;
    error: any;
}
const initialState: GetMyProfileDataState = {
    data: null,
    error: null,
};

const getMyProfileSlice = createSlice({
    name: 'MyProfile',
    initialState,
    reducers: {
        onMyProfileDataRequest: (state) => {
            console.log("onMyProfileDataRequest ??M??", state);
            return {
                ...state,
            };
        },
        onMyProfileData: (state, action) => {
            console.log("onMyProfileData ??M??", state, action.payload);
            return {
                ...state,
                data: action.payload,
                error: null
            };
        },
        onMyProfileDataFailed: (state, action) => {
            console.log("onMyProfileDataFailed ??M??", state, action.payload);
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onMyProfileDataRequest, onMyProfileData, onMyProfileDataFailed } =
    getMyProfileSlice.actions;
export default getMyProfileSlice.reducer;
