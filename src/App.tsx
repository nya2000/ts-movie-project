import { Route, Routes } from 'react-router-dom';
import Header from 'src/components/header/header';
import MainComponent from 'src/components/main-component';
import MovieDetails from 'src/pages/movie-details/movie-details';
import SearchMovie from 'src/pages/search-movie/search-movie';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<MainComponent />} />
                <Route
                    path='/movie-details/:movieId'
                    element={<MovieDetails />}
                />
                <Route path='/searchMovie' element={<SearchMovie />} />
            </Routes>
        </>
    );
}
// TODO: переименовать и сделать один кейс для всех названий фейлов и путей

export default App;
