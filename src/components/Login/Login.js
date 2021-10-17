import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function Login(props) {
    const { onSignIn } = props;

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({});

    function handleSubmit(evt) {
        evt.preventDefault();

        onSignIn({
            email: values.email,
            password: values.password
        });

        resetForm();
    } 

    return(
        <section className='login'>
            <div className='login__container'>
                < Link to='/' className='login__logo'/>
                <h2 className='login__title'>Рады видеть!</h2>
                <form className='login__form' onSubmit={handleSubmit}>
                    <fieldset className='login__fieldset login__fieldset-email'>
                        <label className='login__label login__label-email' htmlFor='email'>E-mail</label>
                        <input type='text' className={`login__input login__input-email ${errors.email ? 'login__input_error' : ''}`} id='email' name='email' pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required onChange={handleChange} value={values.email || ''}></input>
                        <span className={`login__error-message login__error-message-email ${errors.email ? 'login__error-message_active' : ''}`}>{errors.email}</span>
                    </fieldset>
                    <fieldset className='login__fieldset login__fieldset-password'>
                        <label className='login__label login__label-password' htmlFor='password'>Пароль</label>
                        <input type='password' className={`login__input login__input-password ${errors.password ? 'login__input_error' : ''} `} id='password' name='password' required onChange={handleChange} value={values.password || ''}></input>
                        <span className={`login__error-message login__error-message-password ${errors.password ? 'login__error-message_active' : ''} `}>{errors.password}</span>
                    </fieldset>
                    <button type='submit' className={`login__submit-button ${!isValid ? 'login__submit-button_disabled' : ''}` } disabled={!isValid}>Войти</button>
                    <span className='login__signin-label'>Ещё не зарегистрированы? <Link to='/signup' className='login__signin-button'>Регистрация</Link></span>
                </form>
            </div>
        </section>
    );
}

export default Login