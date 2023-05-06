export const selectDetailsOptions = [
    {
        label: 'Популярные по убыванию',
        value: 'popularity-desc',
    },
    {
        label: 'Популярные по возрастанию',
        value: 'popularity-asc',
    },
    { label: 'Рейтинг по убыванию', value: 'rating-desc' },
    {
        label: 'Рейтинг по возрастанию',
        value: 'rating-asc',
    },
];

export const selectYearOptions = [
    {
        label: '2017',
        value: '2017',
    },
    {
        label: '2018',
        value: '2018',
    },
    {
        label: '2019',
        value: '2019',
    },
    {
        label: '2020',
        value: '2020',
    },
];

export const selectMoviesListOptions = [
    { label: 'Все фильмы', value: 'allMovies' },
    { label: 'Избранные', value: 'favoriteMovies' },
    { label: 'Смотреть позже', value: 'savedMovies' },
];

export const SELECT_MOVIES_LIST = {
    ALL_MOVIES: 'allMovies',
    FAVORITE_MOVIES: 'favoriteMovies',
    SAVED_MOVIES: 'savedMovies',
};
export const AUTH_DATA = {
    login: 'user',
    password: 'user',
};

export const SELECT_DETAILS = {
    POPULARITY_DESCENDING: 'popularity-desc',
    POPULARITY_ASCENDING: 'popularity-asc',
    RATING_DESCENDING: 'rating-desc',
    RATING_ASCENDING: 'rating-asc',
};
export const SELECT_YEAR = {
    2017: '2017',
    2018: '2018',
    2019: '2019',
    2020: '2020',
};

export const SELECT_DEFAULT_OPTION = {
    YEAR: SELECT_YEAR[2020],
    DETAILS: SELECT_DETAILS.POPULARITY_DESCENDING,
    MOVIES_LIST: SELECT_MOVIES_LIST.ALL_MOVIES,
};
export const logOut = 'LogOut';
export const logIn = 'LogIn';
export const login = 'login';
export const password = 'password';
export const emptyString = '';
