import { createSlice } from '@reduxjs/toolkit';
interface GetDeactivateUserDataState {
    data: any;
    error: any;
}
const initialState: GetDeactivateUserDataState = {
    data: null,
    error: null,
};

const getDeactivateUserSlice = createSlice({
    name: 'Get deactivate data',
    initialState,
    reducers: {
        onGetDeactivateUserDataRequest: (state) => {
            return {
                ...state,
            };
        },
        onGetDeactivateUserData: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onGetDeactivateUserDataFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onGetDeactivateUserDataRequest, onGetDeactivateUserData, onGetDeactivateUserDataFailed } =
getDeactivateUserSlice.actions;
export default getDeactivateUserSlice.reducer;
    