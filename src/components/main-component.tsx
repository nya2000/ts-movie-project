import { useSelector } from 'react-redux';
import Filter from 'src/components/filter/filter';
import Movies from 'src/components/movies/movies';
import usePagination from 'src/hooks/usePagination/usePagination';
import { MoviesStore } from 'src/shared/types';
import '../styled/App.css';

function MainComponent() {
    const movies = useSelector(
        (state: MoviesStore) => state.movies.filteredMovies
    );
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        totalPages,
    } = usePagination({
        contentPerPage: 9,
        count: movies.length,
    });

    return (
        <div className='App'>
            <div className='container'>
                <div className='content_wrapper'>
                    <Filter
                        nextPage={nextPage}
                        prevPage={prevPage}
                        currentPage={page}
                        totalPages={totalPages}
                    />
                    <Movies
                        firstContentIndex={firstContentIndex}
                        lastContentIndex={lastContentIndex}
                    />
                </div>
            </div>
        </div>
    );
}

export default MainComponent;
