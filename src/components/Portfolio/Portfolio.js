import React from 'react';
import './Portfolio.css'

function Portfolio(props) {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__list'>
                <li className='portfolio__item'><a href='https://renat2202.github.io/howToLearn' className='portfolio__link' target='_blank' rel="noreferrer">Статичный сайт</a></li>
                <li className='portfolio__item'><a href='https://renat2202.github.io/travelRussia/' className='portfolio__link' target='_blank' rel="noreferrer">Адаптивный сайт</a></li>
                <li className='portfolio__item'><a href='https://renat2202.github.io/travelRussia/' className='portfolio__link' target='_blank' rel="noreferrer">Одностраничное приложение</a></li>
            </div>
        </section>
    )
}

export default Portfolio