import { createSlice } from '@reduxjs/toolkit';
interface GetCityDataState {
    data: any;
    error: any;
}
const initialState: GetCityDataState = {
    data: null,
    error: null,
};

const getCitySlice = createSlice({
    name: 'Get city data',
    initialState,
    reducers: {
        onGetCityDataRequest: (state) => {
            return {
                ...state,
            };
        },
        onGetCityData: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onGetCityDataFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onGetCityDataRequest, onGetCityData, onGetCityDataFailed } = getCitySlice.actions;
export default getCitySlice.reducer;
