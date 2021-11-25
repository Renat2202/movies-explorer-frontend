import React from 'react';
import { Link, NavLink, Route, Switch, useLocation } from 'react-router-dom';
import './SearchForm.css';
import Tumbler from '../Tumbler/Tumbler';

function SearchForm(props) {
    const location = useLocation();
    const savedMoviesLocation = location.pathname === '/saved-movies';
    const moviesLocation = location.pathname === '/movies';
    const { checkShortMovies, isShortMoviesFiltered, searchSavedMoviesSubmit } = props;
    const [keyWord, setKeyWord] = React.useState('');
    

    function handleSubmit(e) {
        e.preventDefault();
        console.log('1')
        if (savedMoviesLocation) {
            console.log('2')
            searchSavedMoviesSubmit(keyWord)
        } else if (moviesLocation) {
            props.searchMovies(keyWord);
        }
    }

    function handleChangeKeyWord(e) {
        setKeyWord(e.target.value);
    }

    // function handleSearchSavedMoviesSubmit(e) {
    //     e.preventDefault();
    //     searchSavedMoviesSubmit(keyWord)
    // }

    function handleTumblerOn(check) {
        checkShortMovies(check);
    }

    return(
        <section className='search-form'>
            <form className='search-form__form' onSubmit={handleSubmit}>
                <label htmlFor='movie' className='search-form__input-label'></label>
                <input type='text' className='search-form__input' name='movie' id='movie' placeholder='Фильм' value={keyWord} onChange={handleChangeKeyWord}></input>
                <button type='submit' className='search-form__find-button' value='Найти'>Найти</button>
                {/* <input type='checkbox' className='search-form__radio-button' id='short-film'></input> */}
                <div className='search-form__radio-container'>
                    < Tumbler tumblerOn={handleTumblerOn} isShortMoviesFiltered={isShortMoviesFiltered}/>
                    <label htmlFor='short-film' className='search-form__radio-label'>Короткометражки</label>
                </div>
            </form>
        </section>
    );
}

export default SearchForm