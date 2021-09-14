import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

function Movies(props) {
    return(
        <div>
            < SearchForm />
            < Preloader />
            < MoviesCardList />
            < MoviesCard />
        </div>
    );
}

export default Movies