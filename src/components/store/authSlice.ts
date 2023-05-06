import { createSlice } from '@reduxjs/toolkit';
import { AuthSliceInitialState } from 'src/shared/types';

const initialState: AuthSliceInitialState = {
    isLogined: false,
};
const authSlice = createSlice({
    name: 'authentication',
    initialState,

    reducers: {
        AUTHENTICATION_USER: (state, action) => {
            state.isLogined = action.payload;
        },
    },
});
export const { AUTHENTICATION_USER } = authSlice.actions;
export default authSlice.reducer;
