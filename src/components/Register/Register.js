import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useFormWithValidation } from '../../utils/useFormWithValidation';


function Register(props) {
    const { onSignUp, signUpErrorMessage } = props;

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({});
    

    function handleSubmit(e) {
        e.preventDefault();

        onSignUp({
            name: values.name,
            email: values.email,
            password: values.password
        })
        // console.log({
        //     name: values['register-name'],
        //     email: values['register-email'],
        //     password: values['register-password']
        // })
        // console.log(values);
        // console.log(errors);
        resetForm();
    }

    function handleClick() {
        console.log(errors);
    }

    return(
        <section className='register'>
            <div className='register__container'>
                < Link to='/' className='register__logo'/>
                <h2 className='register__title' onClick={handleClick}>Добро пожаловать!</h2>
                <form className='register__form' onSubmit={handleSubmit}>
                    <fieldset className='register__fieldset register__fieldset-name'>
                        <label className='register__label register__label-name' htmlFor='name'>Имя</label>
                        <input minLength='2' type='text' className={`register__input register__input-name ${errors.name ? 'register__input_error' : ''}`} id='name' name='name' pattern="^[а-яА-ЯЁёa-zA-Z\s\-]+$" required onChange={handleChange} value={values.name || ''}></input>
                        <span className={`register__error-message register__error-message-name ${errors.name ? 'register__error-message_active' : ''}`}>{errors.name || 'Ошибка'}</span>
                    </fieldset>
                    <fieldset className='register__fieldset register__fieldset-email'>
                        <label className='register__label register__label-email' htmlFor='email'>E-mail</label>
                        <input type='text' className={`register__input register__input-email ${errors.email && 'register__input_error'}`} id='email' name='email' pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" defaultValue='pochta@yandex.ru' required onChange={handleChange} value={values.email}></input>
                        <span className={`register__error-message register__error-message-email ${errors.email && 'register__error-message_active'}`}>{errors.email || 'Ошибка'}</span>
                    </fieldset>
                    <fieldset className='register__fieldset register__fieldset-password'>
                        <label className='register__label register__label-password' htmlFor='password'>Пароль</label>
                        <input type='password' className={`register__input register__input-password ${errors.password && 'register__input_error'}`} id='password' name='password' defaultValue='qwerty' required onChange={handleChange} value={values.password || ''}></input>
                        <span className={`register__error-message register__error-message-password ${errors.password && 'register__error-message_active'}`}>{errors.password || 'Ошибка'}</span>
                    </fieldset>
                    <span className={`register__submit-error ${signUpErrorMessage ? 'register__submit-error_active' : ''}`}>{signUpErrorMessage}</span>
                    {/* <span className={`register__submit-error register__submit-error_active`}>Ошибка</span> */}
                    <button type='submit' className={`register__submit-button ${!isValid ? 'register__submit-button_disabled' : ''}`} disabled={!isValid}>Зарегистрироваться</button>
                    <span className='register__signin-label'>Уже зарегистрированы? <Link to='/signin' className='register__signin-button'>Войти</Link></span>
                </form>
            </div>
        </section>
    );
}

export default Register