import { Button } from '@mui/material';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from 'src/assets/img/favorite-icon';
import SavedIcon from 'src/assets/img/saved-icon';
import { IS_OPEN_MODAL } from 'src/components/store/modalSlice';
import {
    ADD_FAVORITE_MOVIE,
    ADD_SAVED_MOVIE,
    REMOVE_FAVORITE_MOVIE,
    REMOVE_SAVED_MOVIE,
} from 'src/components/store/movieSlice';
import {
    AuthenticationStore,
    MovieItemType,
    MoviesStore,
} from 'src/shared/types';
import './movie-item.css';

const MovieItem = ({ movie }: { movie: MovieItemType }) => {
    const dispatch = useDispatch();

    const imagePath = movie.poster_path || movie.backdrop_path;
    const moviePoster = `https://image.tmdb.org/t/p/w500/${imagePath}`;

    const isLogined = useSelector(
        (state: AuthenticationStore) => state.authentication.isLogined
    );
    const favoriteMovies = useSelector(
        (state: MoviesStore) => state.movies.favoriteMovies
    );
    const savedMovies = useSelector(
        (state: MoviesStore) => state.movies.savedMovies
    );
    const openModal = () => {
        dispatch(IS_OPEN_MODAL(true));
    };

    const updateMovieList = (
        array: MovieItemType[],
        addMovie: ActionCreatorWithPayload<MovieItemType>,
        removeMovie: ActionCreatorWithPayload<MovieItemType>
    ) => {
        if (array.some((item) => item.id === movie.id)) {
            dispatch(removeMovie(movie));
        } else {
            dispatch(addMovie(movie));
        }
    };

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
                                : openModal
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
                                : openModal
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
