import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(props) {
    return(
        <section className='login'>
            <div className='login__container'>
                < Link to='/' className='login__logo'/>
                <h2 className='login__title'>Рады видеть!</h2>
                <form className='login__form'>
                    <fieldset className='login__fieldset login__fieldset-email'>
                        <label className='login__label login__label-email' htmlFor='login-email'>E-mail</label>
                        <input type='text' className='login__input login__input-email' id='login-email' name='login-email' defaultValue='pochta@yandex.ru' required></input>
                        <span className='login__error-message login__error-message-email'>Что-то пошло не так...</span>
                    </fieldset>
                    <fieldset className='login__fieldset login__fieldset-password'>
                        <label className='login__label login__label-password' htmlFor='login-password'>Пароль</label>
                        <input type='password' className='login__input login__input-password login__input_error' id='login-password' name='login-password' defaultValue='qwerty' required></input>
                        <span className='login__error-message login__error-message-password login__error-message_active'>Что-то пошло не так...</span>
                    </fieldset>
                    <button type='submit' className='login__submit-button'>Войти</button>
                    <span className='login__signin-label'>Ещё не зарегистрированы? <Link to='/signup' className='login__signin-button'>Регистрация</Link></span>
                </form>
            </div>
        </section>
    );
}

export default Login