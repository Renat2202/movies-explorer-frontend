import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
    return(
        <div>
            < SearchForm />
            < MoviesCardList />
        </div>
    );
}

export default SavedMovies