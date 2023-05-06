import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Genres from 'src/components/filter/genres/genres';
import Pagination from 'src/components/filter/pagination/pagination';
import Selector from 'src/components/filter/selector/selector';
import { ADD_FILTERED_MOVIES } from 'src/components/store/movieSlice';
import {
    SELECT_DEFAULT_OPTION,
    SELECT_MOVIES_LIST,
    selectDetailsOptions,
    selectMoviesListOptions,
    selectYearOptions,
} from 'src/shared/const';
import { defaultFilter, filterMovies } from 'src/shared/filters';
import { DEFAULT_MOVIES_LIST } from 'src/shared/movies-list';
import { MoviesStore, AuthenticationStore } from 'src/shared/types';
import './filter.css';

type FilterProps = {
    nextPage: () => void;
    prevPage: () => void;
    currentPage: number;
    totalPages: number;
};

const Filter = ({
    nextPage,
    prevPage,
    currentPage,
    totalPages,
}: FilterProps) => {
    const dispatch = useDispatch();
    const isLogined = useSelector(
        (state: AuthenticationStore) => state.authentication.isLogined
    );
    const favoriteMovies = useSelector(
        (state: MoviesStore) => state.movies.favoriteMovies
    );
    const savedMovies = useSelector(
        (state: MoviesStore) => state.movies.savedMovies
    );
    const [selectDetails, setSelectDetails] = useState({
        selectDetail: SELECT_DEFAULT_OPTION.DETAILS,
    });
    const [selectYear, setSelectYear] = useState({
        selectYear: SELECT_DEFAULT_OPTION.YEAR,
    });

    const [selectMoviesList, setSelectMoviesList] = useState({
        selectList: SELECT_DEFAULT_OPTION.MOVIES_LIST,
    });
    const [genres, setGenres] = useState<number[]>([]);

    function getMoviesList(selector: string) {
        switch (selector) {
            case SELECT_MOVIES_LIST.FAVORITE_MOVIES:
                return favoriteMovies;
            case SELECT_MOVIES_LIST.SAVED_MOVIES:
                return savedMovies;
            default:
                return DEFAULT_MOVIES_LIST;
        }
    }

    useEffect(() => {
        const movies = getMoviesList(selectMoviesList.selectList);
        const sortedMovies = filterMovies(
            movies,
            selectDetails,
            selectYear,
            genres
        );
        dispatch(ADD_FILTERED_MOVIES(sortedMovies));
    }, [selectDetails, selectYear, genres, selectMoviesList]);

    const resetFilters = () => {
        setSelectDetails({
            selectDetail: SELECT_DEFAULT_OPTION.DETAILS,
        });
        setSelectYear({
            selectYear: SELECT_DEFAULT_OPTION.YEAR,
        });
        setSelectMoviesList({ selectList: SELECT_DEFAULT_OPTION.MOVIES_LIST });
        setGenres([]);
        dispatch(ADD_FILTERED_MOVIES(defaultFilter()));
    };

    return (
        <>
            <div className='filter_wrapper'>
                <h2>Фильтры:</h2>
                <Button
                    sx={{ mb: '10px' }}
                    variant='outlined'
                    onClick={resetFilters}
                >
                    Сбросить все фильтры
                </Button>
                <h4>Сортировать по:</h4>
                <Selector
                    options={selectDetailsOptions}
                    value={selectDetails.selectDetail}
                    onChange={(value) => {
                        setSelectDetails({
                            selectDetail: value,
                        });
                    }}
                />
                <h4>Год релиза:</h4>
                <Selector
                    options={selectYearOptions}
                    value={selectYear.selectYear}
                    onChange={(value) => {
                        setSelectYear({
                            selectYear: value,
                        });
                    }}
                />
                {isLogined ? (
                    <Selector
                        options={selectMoviesListOptions}
                        value={selectMoviesList.selectList}
                        onChange={(value) => {
                            setSelectMoviesList({ selectList: value });
                        }}
                    />
                ) : null}

                <Genres
                    genres={genres}
                    onChange={(event, id) =>
                        event.target.checked
                            ? setGenres([...genres, id])
                            : setGenres([
                                  ...genres.filter((item) => item != id),
                              ])
                    }
                />
                <Pagination
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </div>
        </>
    );
};

export default Filter;
