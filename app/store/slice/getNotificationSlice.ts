import { createSlice } from '@reduxjs/toolkit';
interface GetNotificationDataState {
    data: any;
    error: any;
}
const initialState: GetNotificationDataState = {
    data: null,
    error: null,
};

const getNotificationSlice = createSlice({
    name: 'GetgetNotification',
    initialState,
    reducers: {
        onGetgetNotificationRequest: (state) => {
            return {
                ...state,
            };
        },
        onGetgetNotification: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        onGetgetNotificationFailed: (state, action) => {
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        },
    },
});

export const { onGetgetNotificationRequest, onGetgetNotification, onGetgetNotificationFailed } =
getNotificationSlice.actions;
export default getNotificationSlice.reducer;
