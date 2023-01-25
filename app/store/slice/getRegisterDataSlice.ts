import { createSlice } from '@reduxjs/toolkit';
interface GetRegisterDataState {
    data: any;
    error: any;
}
const initialState: GetRegisterDataState = {
    data: null,
    error: null,
};

const getRegisterDataSlice = createSlice({
    name: 'Get Register data',
    initialState,
    reducers: {
        onGetRegisterDataRequest: (state) => {
            return {
                ...state,
            };
        },
        onGetRegisterData: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onGetRegisterDataFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onGetRegisterDataRequest, onGetRegisterData, onGetRegisterDataFailed } =
    getRegisterDataSlice.actions;
export default getRegisterDataSlice.reducer;
