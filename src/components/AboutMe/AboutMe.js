import React from 'react';
import './AboutMe.css';
import portrait from '../../images/about-me-portrait.png';
import { Link } from 'react-router-dom';

function AboutMe(props) {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__content'>
                <div className='about-me__description'>
                    <h3 className='about-me__name'>Виталий</h3>
                    <span className='about-me__caption'>Фронтенд-разработчик, 30 лет</span>
                    <p className='about-me__biography'>
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <ul className='about-me__socials'>
                        <li className='about-me__socials-item'><Link className='about-me__socials-link' to='#' target="_blank">Facebook</Link></li>
                        <li className='about-me__socials-item'><Link className='about-me__socials-link' to='#' target="_blank">Github</Link></li>
                    </ul>
                </div>
                <img className='about-me__portrait' src={portrait} alt='Портрет'/>
            </div>
        </section>
    )
}

export default AboutMe