import { Box, Typography } from '@mui/material';
import format from 'date-fns/format';
import { useParams } from 'react-router-dom';
import { DEFAULT_MOVIES_LIST } from 'src/data/movies-list';
import { movieDetails } from 'src/shared/const';
import { MovieItemType } from 'src/shared/types';
import './movie-details.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const movie = DEFAULT_MOVIES_LIST.find(
        (item) => item.id === Number(movieId)
    ) as MovieItemType;
    const movieBackDrop = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    const moviePoster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const movieReleaseDate = format(new Date(movie.release_date), 'yyyy');

    const movieBackground = {
        backgroundImage: `url(${movieBackDrop})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '1440px',
        height: '850px',
    };

    return (
        <div className='container'>
            <div className='content_wrapper'>
                <Box sx={movieBackground}>
                    <Box sx={movieDetails}>
                        <img
                            src={moviePoster}
                            className='movie-details-poster'
                            alt=''
                        />

                        <Box>
                            <Typography variant='h3' fontWeight={'bold'}>
                                {movie.title}
                            </Typography>
                            <Typography>{movie.overview}</Typography>
                            <Typography>{movieReleaseDate}</Typography>
                            <Typography>{movie.vote_average}</Typography>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default MovieDetails;
