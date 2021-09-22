import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
    return(
        <>
            <div className='card-list'>
                < MoviesCard movieIsSaved={true}/>
                < MoviesCard movieIsSaved={false}/>
                < MoviesCard movieIsSaved={false}/>
                < MoviesCard movieIsSaved={true}/>
            </div>
            <div className='card-list__button-container'>
                <button type='button' className='card-list__more-button'>Ещё</button>
            </div>
        </>
    );
}

export default MoviesCardList