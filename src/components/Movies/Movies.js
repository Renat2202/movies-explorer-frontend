import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

function Movies(props) {
    const { movies, isLoading, filteredMovies, searchMovies, isFilmsNotFoundShown, moviesIsShown, moreMovies, onLikeMovie, savedMovies, checkSaveStatus, checkShortMovies, isShortMoviesFiltered } = props;

    const shownMovies = filteredMovies.slice(0, moviesIsShown)

    function searchMoviesSubmit(keyWord) {
        searchMovies(keyWord);
    }

    return(
        <div>
            < SearchForm searchMovies={searchMoviesSubmit} checkShortMovies={checkShortMovies} isShortMoviesFiltered={isShortMoviesFiltered}/>
            < Preloader isLoading={isLoading} filteredMovies={filteredMovies} isFilmsNotFoundShown={isFilmsNotFoundShown}/>
            < MoviesCardList movies={movies} filteredMovies={filteredMovies} shownMovies={shownMovies} moreMovies={moreMovies} onLikeMovie={onLikeMovie} savedMovies={savedMovies} checkSaveStatus={checkSaveStatus}/>
        </div>
    );
}

export default Movies