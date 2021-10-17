import React from 'react';
import './Profile.css';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile(props) {
    const [ isChanged, setIsChanged ] = React.useState(false);

    const currentUser = React.useContext(CurrentUserContext);

    const { onUpdateUser, onSignOut } = props;
    
    const { values, setValues, handleChange, errors, isValid } = useFormWithValidation({});


    React.useEffect(() => {
        if (currentUser && currentUser.name && currentUser.email) {
            setValues({ name: currentUser.name, email: currentUser.email })
        }
    }, [currentUser, setValues]);

    // setValues({ name: currentUser.name, email: currentUser.email })

    React.useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setIsChanged(false);
        } else {
            setIsChanged(true);
        }
    }, [handleChange])


    function handleSubmit(e) {
        e.preventDefault();

        console.log(values);

        onUpdateUser({
            name: values.name,
            email: values.email
        })
    }

    function click() {
        console.log(values);
    }

    return(
        <section className='profile'>
            <h2 onClick={click} className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
            <form className='profile__form' onSubmit={handleSubmit}>
                <fieldset className='profile__container profile__name-container'>
                    <div className="profile__form-row">
                        <label className='profile__label profile__name-label' htmlFor='name'>Имя</label>
                        <input type='text' className={`profile__input profile__input-name ${errors.name ? 'profile__input_error' : ''}`} id='name' name='name' pattern="^[а-яА-ЯЁёa-zA-Z\s\-]+$" onChange={handleChange} value={values.name || ''}/>
                    </div>    
                    <span className={`profile__error-message profile__error-message-name ${errors.name && 'profile__error-message_active'}`}>{errors.name || 'Ошибка'}</span>
                </fieldset>
                <fieldset className='profile__container profile__email-container'>
                    <div className="profile__form-row">
                        <label className='profile__label profile__email-label' htmlFor='email'>E-mail</label>
                        <input type='text' className={`profile__input profile__input-email ${errors.email ? 'profile__input_error' : ''}`} id='email' name='email' pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={handleChange} value={values.email || ''}/>
                    </div>
                    <span className={`profile__error-message profile__error-message-email ${errors.email && 'profile__error-message_active'}`}>{errors.email || 'Ошибка'}</span>  
                </fieldset>
                <button type='submit' className={`profile__submit-button ${!isValid || !isChanged ? 'profile__submit-button_disabled' : ''}`} disabled={!isValid || !isChanged}>Редактировать</button>
                <button type='button' className='profile__exit-button' onClick={onSignOut}>Выйти из аккаунта</button>
            </form>
        </section>
    );
}

export default Profile