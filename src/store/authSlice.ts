import { createSlice } from '@reduxjs/toolkit';
import { AuthSliceInitialState } from 'src/shared/types';

const initialState: AuthSliceInitialState = {
    isLogined: false,
};
const authSlice = createSlice({
    name: 'authorization',
    initialState,

    reducers: {
        USER_AUTHORIZATION: (state, action) => {
            state.isLogined = action.payload;
        },
    },
});
export const { USER_AUTHORIZATION } = authSlice.actions;
export default authSlice.reducer;
