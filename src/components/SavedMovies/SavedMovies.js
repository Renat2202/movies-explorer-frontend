import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
    const { isLoading, savedMovies, currentUserMovies, deleteMovie, checkSaveStatus, searchSavedMoviesSubmit, checkShortMovies, isShortMoviesFiltered, filtredSavedMovies, isFilmsNotFoundShown } = props;
    
    // const savedMoviesToShow = filtredSavedMovies.length === 0 ? savedMovies : filtredSavedMovies;
    const savedMoviesToShow = filtredSavedMovies;
    
    return(
        <div>
            < SearchForm searchSavedMoviesSubmit={searchSavedMoviesSubmit} checkShortMovies={checkShortMovies} isShortMoviesFiltered={isShortMoviesFiltered}/>
            < Preloader isLoading={isLoading} isFilmsNotFoundShown={isFilmsNotFoundShown} />
            < MoviesCardList savedMovies={savedMovies} filtredSavedMovies={filtredSavedMovies} savedMoviesToShow={savedMoviesToShow} deleteMovie={deleteMovie} checkSaveStatus={checkSaveStatus}/>
        </div>
    );
}

export default SavedMovies