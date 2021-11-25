import React from 'react';
import { Link, NavLink, Route, Switch, useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
    const location = useLocation()
    const { movies, filteredMovies, shownMovies, moreMovies, onLikeMovie, savedMovies, deleteMovie, checkSaveStatus, filtredSavedMovies, savedMoviesToShow } = props;

    // const shownMovies = filteredMovies.slice(0, moviesIsShown)

    // const savedMoviesToShow = filtredSavedMovies.length !== 0 ? filtredSavedMovies : savedMovies; 
    // const savedMoviesToShow = filtredSavedMovies.length !== 0 ? filtredSavedMovies : savedMovies; 


    function showMoreMovies() {
        moreMovies();
    }

    return(
        <>
            <div className='card-list'>
                <Switch>
                    <Route path='/movies'>
                        { location.pathname === '/movies' && shownMovies.map((movie) => (
                            < MoviesCard key={movie.id} movie={movie} onLikeMovie={onLikeMovie} savedMovies={savedMovies} checkSaveStatus={checkSaveStatus} />
                        )) }
                    </Route>
                    <Route path='/saved-movies'>
                        { location.pathname === '/saved-movies' && savedMovies.map((movie) => (
                                < MoviesCard 
                                    key={movie.movieId}
                                    movie={movie} 
                                    onLikeMovie={onLikeMovie} 
                                    savedMovies={savedMovies} 
                                    deleteMovie={deleteMovie} 
                                    checkSaveStatus={checkSaveStatus}
                                />
                        )) }
                    </Route>
                </Switch>
               
            </div>
            { location.pathname === '/movies' &&
                <div className='card-list__button-container'>
                    <button type='button' className={`card-list__more-button ${shownMovies.length === filteredMovies.length ? 'card-list__more-button_hidden' : ''}`} onClick={showMoreMovies}>Ещё</button>
                </div>
            }
           
        </>
    );
}

export default MoviesCardList