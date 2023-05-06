import { createSlice } from '@reduxjs/toolkit';
import { ModalSliceInitialState } from 'src/shared/types';

const initialState: ModalSliceInitialState = {
    isOpen: false,
};
const modalSlice = createSlice({
    name: 'modal',
    initialState,

    reducers: {
        IS_OPEN_MODAL: (state, action) => {
            state.isOpen = action.payload;
        },
    },
});
// TODO: Change reducers naming (open modal authentication... )
export const { IS_OPEN_MODAL } = modalSlice.actions;
export default modalSlice.reducer;
