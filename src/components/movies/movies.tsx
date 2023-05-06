import { useSelector } from 'react-redux';
import MovieItem from 'src/components/movies/movie-item/movie-item';
import { MoviesStore } from 'src/shared/types';
import './movies.css';

type MoviesProps = {
    firstContentIndex: number;
    lastContentIndex: number;
};

const Movies = ({ firstContentIndex, lastContentIndex }: MoviesProps) => {
    const filteredMovies = useSelector(
        (state: MoviesStore) => state.movies.filteredMovies
    );
    return (
        <div className='movies'>
            {filteredMovies
                .slice(firstContentIndex, lastContentIndex)
                .map((movie) => (
                    <MovieItem movie={movie} key={movie.id} />
                ))}
        </div>
    );
};

export default Movies;
