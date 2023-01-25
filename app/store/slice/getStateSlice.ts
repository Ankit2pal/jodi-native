import { createSlice } from '@reduxjs/toolkit';
interface GetStateDataState {
    data: any;
    error: any;
}
const initialState: GetStateDataState = {
    data: null,
    error: null,
};

const getStateSlice = createSlice({
    name: 'Get State data',
    initialState,
    reducers: {
        onGetStateDataRequest: (state) => {
            return {
                ...state,
            };
        },
        onGetStateData: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onGetStateDataFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onGetStateDataRequest, onGetStateData, onGetStateDataFailed } =
    getStateSlice.actions;
export default getStateSlice.reducer;
