import { createSlice } from '@reduxjs/toolkit';
import { ModalSliceInitialState } from 'src/shared/types';

const initialState: ModalSliceInitialState = {
    isOpen: false,
};
const modalSlice = createSlice({
    name: 'modal',
    initialState,

    reducers: {
        TOGGLE_MODAL: (state, action) => {
            state.isOpen = action.payload;
        },
    },
});
export const { TOGGLE_MODAL } = modalSlice.actions;
export default modalSlice.reducer;
