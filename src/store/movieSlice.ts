import { createSlice } from '@reduxjs/toolkit';
import { defaultFilter } from 'src/shared/filters';
import { MoviesSliceInitialState } from 'src/shared/types';

const initialState: MoviesSliceInitialState = {
    filteredMovies: defaultFilter(),
    favoriteMovies: [],
    savedMovies: [],
};
const moviesSlice = createSlice({
    name: 'movies',
    initialState,

    reducers: {
        ADD_FILTERED_MOVIES: (state, action) => {
            state.filteredMovies = action.payload;
        },
        ADD_FAVORITE_MOVIE: (state, action) => {
            state.favoriteMovies.push(action.payload);
        },
        REMOVE_FAVORITE_MOVIE: (state, action) => {
            state.favoriteMovies = state.favoriteMovies.filter(
                (item) => item.id !== action.payload.id
            );
        },
        ADD_SAVED_MOVIE: (state, action) => {
            state.savedMovies.push(action.payload);
        },
        REMOVE_SAVED_MOVIE: (state, action) => {
            state.savedMovies = state.savedMovies.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});
export const {
    ADD_FILTERED_MOVIES,
    ADD_FAVORITE_MOVIE,
    REMOVE_FAVORITE_MOVIE,
    ADD_SAVED_MOVIE,
    REMOVE_SAVED_MOVIE,
} = moviesSlice.actions;
export default moviesSlice.reducer;
