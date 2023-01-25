import { createSlice } from '@reduxjs/toolkit';
interface GetPostalCodeDataState {
    data: any;
    error: any;
}
const initialState: GetPostalCodeDataState = {
    data: null,
    error: null,
};

const getPostalCodeSlice = createSlice({
    name: 'Get postal code',
    initialState,
    reducers: {
        onGetPostalCodeDataRequest: (state) => {
            return {
                ...state,
            };
        },
        onGetPostalCodeData: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onGetPostalCodeDataFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onGetPostalCodeDataRequest, onGetPostalCodeData, onGetPostalCodeDataFailed } =
    getPostalCodeSlice.actions;
export default getPostalCodeSlice.reducer;
