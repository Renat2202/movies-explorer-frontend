import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register(props) {
    return(
        <section className='register'>
            <div className='register__container'>
                < Link to='/' className='register__logo'/>
                <h2 className='register__title'>Добро пожаловать!</h2>
                <form className='register__form'>
                    <fieldset className='register__fieldset register__fieldset-name'>
                        <label className='register__label register__label-name' htmlFor='register-name'>Имя</label>
                        <input type='text' className='register__input register__input-name' id='register-name' name='register-name' defaultValue='Виталий' required></input>
                        <span className='register__error-message register__error-message-name'>Что-то пошло не так...</span>
                    </fieldset>
                    <fieldset className='register__fieldset register__fieldset-email'>
                        <label className='register__label register__label-email' htmlFor='register-email'>E-mail</label>
                        <input type='text' className='register__input register__input-email' id='register-email' name='register-email' defaultValue='pochta@yandex.ru' required></input>
                        <span className='register__error-message register__error-message-email'>Что-то пошло не так...</span>
                    </fieldset>
                    <fieldset className='register__fieldset register__fieldset-password'>
                        <label className='register__label register__label-password' htmlFor='register-password'>Пароль</label>
                        <input type='password' className='register__input register__input-password register__input_error' id='register-password' name='register-password' defaultValue='qwerty' required></input>
                        <span className='register__error-message register__error-message-password register__error-message_active'>Что-то пошло не так...</span>
                    </fieldset>
                    <button type='submit' className='register__submit-button'>Зарегистрироваться</button>
                    <span className='register__signin-label'>Уже зарегистрированы? <Link to='/signin' className='register__signin-button'>Войти</Link></span>
                </form>
            </div>
        </section>
    );
}

export default Register