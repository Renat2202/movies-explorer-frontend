import React from 'react';
import './SearchForm.css';
import Tumbler from '../Tumbler/Tumbler';

function SearchForm(props) {
    return(
        <section className='search-form'>
            <form className='search-form__form'>
                <label htmlFor='movie' className='search-form__input-label'></label>
                <input type='text' className='search-form__input' name='movie' id='movie' placeholder='Фильм'></input>
                <button type='button' className='search-form__find-button' value='Найти'>Найти</button>
                {/* <input type='checkbox' className='search-form__radio-button' id='short-film'></input> */}
                <div className='search-form__radio-container'>
                    < Tumbler />
                    <label htmlFor='short-film' className='search-form__radio-label'>Короткометражки</label>
                </div>
            </form>
        </section>
    );
}

export default SearchForm