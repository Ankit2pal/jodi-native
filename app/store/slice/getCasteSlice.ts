import { createSlice } from '@reduxjs/toolkit';
interface GetCasteDataState {
    data: any;
    error: any;
}
const initialState: GetCasteDataState = {
    data: null,
    error: null,
};

const getCasteSlice = createSlice({
    name: 'Get caste data',
    initialState,
    reducers: {
        onGetCasteDataRequest: (state) => {
            return {
                ...state,
            };
        },
        onGetCasteData: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onGetCasteDataFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onGetCasteDataRequest, onGetCasteData, onGetCasteDataFailed } =
    getCasteSlice.actions;
export default getCasteSlice.reducer;
