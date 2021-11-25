import React, { useEffect } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom'
import './MoviesCard.css';
// import image from '../../images/movies-card-image.png'

function MoviesCard(props) {
    // const image = !savedMovieLocation ? `https://api.nomoreparties.co${props.movie.image.url}` : `${props.movie.image}`
    // const image = props.movie.image.url;
    const [movieIsSaved, setMovieIsSaved] = React.useState(false);
    const { onLikeMovie, savedMovies, deleteMovie, checkSaveStatus } = props;
    const { nameRU, duration } = props.movie;
    const location = useLocation();
    const savedMovieLocation = location.pathname === '/saved-movies';

    const image = !savedMovieLocation ? `https://api.nomoreparties.co${props.movie.image.url}` : `${props.movie.image}`

    // const movieIsSaved = savedMovies.some(i => i.movieId === props.movie.id);
    // const movieIsSaved = checkSaveStatus(props.movie);

    function durationOptimiztion(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        const newDuration = hours ? `${hours}ч ${minutes}м` : `${minutes}м`;

        return newDuration
    }

    function handleLikeClick() {
        console.log(props.movie);
        onLikeMovie( movieIsSaved, props.movie);
        setMovieIsSaved(savedMovies.some(i => i.movieId === props.movie.id))
    }

    function handleDeleteMovie() {
        deleteMovie(props.movie);
    }

    useEffect(() => {
        setMovieIsSaved(savedMovies.some(i => i.movieId === props.movie.id))
    }, [savedMovies, props.movie, movieIsSaved])

    return(
        // <div className={`movies-card ${ savedMovieLocation && movieIsSaved ? 'movies-card_hidden' : ''}`}>
        <div className={`movies-card`}>
            <div className='movies-card__description'>
                <div className='movies-card__description-container'>
                    <h2 className='movies-card__title'>{nameRU}</h2>
                    <span className='movies-card__duration'>{durationOptimiztion(duration)}</span>
                </div>
                <div className='movies-card__button-container'>
                    <Switch>
                        <Route path='/movies'>
                            <button className={`movies-card__saved movies-card__saved_hovered ${ movieIsSaved ? 'movies-card__saved_active': ''}`} onClick={handleLikeClick}></button>
                        </Route>
                        <Route path='/saved-movies'>
                            <button type='button' className={`movies-card__delete-card`} onClick={handleDeleteMovie}></button>
                        </Route>
                
                    </Switch>
                </div>
            </div>
            <img className='movies-card__image' src={image} alt='изображение' />
        </div>
    );
}

export default MoviesCard