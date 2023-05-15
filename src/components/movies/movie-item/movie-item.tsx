import { Button } from '@mui/material';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from 'src/assets/img/favorite-icon';
import SavedIcon from 'src/assets/img/saved-icon';
import { TOGGLE_MODAL } from 'src/store/modalSlice';
import {
    ADD_FAVORITE_MOVIE,
    ADD_SAVED_MOVIE,
    REMOVE_FAVORITE_MOVIE,
    REMOVE_SAVED_MOVIE,
} from 'src/store/movieSlice';
import {
    AuthorizationStore,
    MovieItemType,
    MoviesStore,
} from 'src/shared/types';
import './movie-item.css';

const MovieItem = ({ movie }: { movie: MovieItemType }) => {
    const dispatch = useDispatch();

    const imagePath = movie.poster_path || movie.backdrop_path;
    const moviePoster = `https://image.tmdb.org/t/p/w500/${imagePath}`;

    const isLogined = useSelector(
        (state: AuthorizationStore) => state.authorization.isLogined
    );
    const favoriteMovies = useSelector(
        (state: MoviesStore) => state.movies.favoriteMovies
    );
    const savedMovies = useSelector(
        (state: MoviesStore) => state.movies.savedMovies
    );
    const handleOpenModal = () => dispatch(TOGGLE_MODAL(true));

    const updateMovieList = (
        movies: MovieItemType[],
        ADD_FAVORITE_MOVIE: ActionCreatorWithPayload<MovieItemType>,
        REMOVE_FAVORITE_MOVIE: ActionCreatorWithPayload<MovieItemType>
    ) => {
        if (movies.some((item) => item.id === movie.id)) {
            dispatch(REMOVE_FAVORITE_MOVIE(movie));
        } else {
            dispatch(ADD_FAVORITE_MOVIE(movie));
        }
    };

    const handleOnClick = () =>
        isLogined
            ? () =>
                  updateMovieList(
                      savedMovies,
                      ADD_SAVED_MOVIE,
                      REMOVE_SAVED_MOVIE
                  )
            : handleOpenModal;

    return (
        <div className='movie_item'>
            <div className='movie_item_poster'>
                <img src={moviePoster} alt='' />
            </div>
            <div className='movie_item_details'>
                <div className='movie_item_details_header'>
                    <p>{`Рейтинг:  ${movie.vote_average}`}</p>
                    <FavoriteIcon
                        onClick={
                            isLogined
                                ? () =>
                                      updateMovieList(
                                          favoriteMovies,
                                          ADD_FAVORITE_MOVIE,
                                          REMOVE_FAVORITE_MOVIE
                                      )
                                : handleOpenModal
                        }
                        active={
                            isLogined
                                ? favoriteMovies.some(
                                      (item) => item.id === movie.id
                                  )
                                : false
                        }
                    />
                    <SavedIcon
                        onClick={
                            isLogined
                                ? () =>
                                      updateMovieList(
                                          savedMovies,
                                          ADD_SAVED_MOVIE,
                                          REMOVE_SAVED_MOVIE
                                      )
                                : handleOpenModal
                        }
                        active={
                            isLogined
                                ? savedMovies.some(
                                      (item) => item.id === movie.id
                                  )
                                : false
                        }
                    />
                </div>
                <div className='movie_item_details_title'>
                    <h3>{movie.title}</h3>
                </div>
                <div className='movie_item_details_button'>
                    <Link to={`/movie-details/${movie.id}`}>
                        <Button variant='outlined'>Подробнее</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;
