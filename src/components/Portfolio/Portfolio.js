import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio(props) {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__list'>
                <li className='portfolio__item'><Link to='#' className='portfolio__link'>Статичный сайт</Link></li>
                <li className='portfolio__item'><Link to='#' className='portfolio__link'>Адаптивный сайт</Link></li>
                <li className='portfolio__item'><Link to='#' className='portfolio__link'>Одностраничное приложение</Link></li>
            </div>
        </section>
    )
}

export default Portfolio