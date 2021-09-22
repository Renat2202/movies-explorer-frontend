import React from 'react';
import './Profile.css'

function Profile(props) {
    return(
        <section className='profile'>
            <h2 className='profile__title'>Привет, Виталий!</h2>
            <form className='profile__form'>
                <fieldset className='profile__container profile__name-container'>
                    <label className='profile__label profile__name-label' htmlFor='profile-name'>Имя</label>
                    <input type='text' className='profile__input profile__input-name' id='profile-name' name='profile-name' defaultValue='Виталий'/>
                </fieldset>
                <fieldset className='profile__container profile__email-container'>
                    <label className='profile__label profile__email-label' htmlFor='profile-email'>E-mail</label>
                    <input type='text' className='profile__input profile__input-email' id='profile-email' name='profile-email' defaultValue='pochta@yandex.ru'/>
                </fieldset>
                <button type='submit' className='profile__submit-button'>Редактировать</button>
                <button type='button' className='profile__exit-button'>Выйти из аккаунта</button>
            </form>
        </section>
    );
}

export default Profile