import { createSlice } from '@reduxjs/toolkit';
interface GetCountryDataState {
    data: any;
    error: any;
}
const initialState: GetCountryDataState = {
    data: null,
    error: null,
};

const getCountrySlice = createSlice({
    name: 'Get country data',
    initialState,
    reducers: {
        onGetCountryDataRequest: (state) => {
            return {
                ...state,
            };
        },
        onGetCountryData: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onGetCountryDataFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onGetCountryDataRequest, onGetCountryData, onGetCountryDataFailed } =
    getCountrySlice.actions;
export default getCountrySlice.reducer;
