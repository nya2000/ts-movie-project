export type MovieItemType = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type MoviesStore = {
    movies: {
        filteredMovies: MovieItemType[];
        favoriteMovies: MovieItemType[];
        savedMovies: MovieItemType[];
    };
};
export type AuthorizationStore = {
    authorization: { isLogined: boolean };
};
export type ModalStore = {
    modal: { isOpen: boolean };
};

export type MoviesSliceInitialState = {
    filteredMovies: MovieItemType[];
    favoriteMovies: MovieItemType[];
    savedMovies: MovieItemType[];
};
export type ModalSliceInitialState = {
    isOpen: boolean;
};
export type AuthSliceInitialState = {
    isLogined: boolean;
};
