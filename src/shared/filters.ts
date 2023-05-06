import { SELECT_DEFAULT_OPTION, SELECT_DETAILS } from 'src/shared/const';
import { DEFAULT_MOVIES_LIST } from 'src/shared/movies-list';
import { MovieItemType } from 'src/shared/types';

export const sortByDetails = (
    movies: MovieItemType[],
    selectDetails: string
) => {
    return [...movies].sort((a, b) => {
        switch (selectDetails) {
            case SELECT_DETAILS.POPULARITY_DESCENDING:
                return b.popularity - a.popularity;

            case SELECT_DETAILS.POPULARITY_ASCENDING:
                return a.popularity - b.popularity;

            case SELECT_DETAILS.RATING_DESCENDING:
                return b.vote_average - a.vote_average;

            case SELECT_DETAILS.RATING_ASCENDING:
                return a.vote_average - b.vote_average;

            default:
                return b.popularity - a.popularity;
        }
    });
};

export const sortByYear = (movies: MovieItemType[], selectYear: string) => {
    return movies.filter((movie) => movie.release_date.includes(selectYear));
};

export const sortByGenres = (movies: MovieItemType[], genres: number[]) => {
    if (genres.length) {
        return movies.filter((item) =>
            genres.some((movie) => item.genre_ids.includes(movie))
        );
    } else {
        return movies;
    }
};

export const defaultFilter = () => {
    const sortedByDetails = sortByDetails(
        DEFAULT_MOVIES_LIST,
        SELECT_DEFAULT_OPTION.DETAILS
    );

    return sortByYear(sortedByDetails, SELECT_DEFAULT_OPTION.YEAR);
};

export const filterMovies = (
    movies: MovieItemType[],
    selectDetails: { selectDetail: string },
    selectYear: { selectYear: string },
    genres: number[]
) => {
    const sortedByDetails = sortByDetails(movies, selectDetails.selectDetail);

    const sortedByYears = sortByYear(sortedByDetails, selectYear.selectYear);

    return sortByGenres(sortedByYears, genres);
};
