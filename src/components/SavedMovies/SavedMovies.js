import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
    return(
        <div>
            < SearchForm />
            < MoviesCardList />
            < MoviesCard />
        </div>
    );
}

export default SavedMovies