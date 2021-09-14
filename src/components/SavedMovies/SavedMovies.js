import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
    return(
        <div>
            < MoviesCardList />
            < MoviesCard />
        </div>
    );
}

export default SavedMovies