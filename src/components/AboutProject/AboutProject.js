import React from 'react';
import './AboutProject.css';

function AboutProject(props) {
    return (
        <section className='about-project' id='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__description'>
                <div className='about-project__description-item'>
                    <h3 className='about-project__description-title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__description-caption'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__description-item'>
                    <h3 className='about-project__description-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__description-caption'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__schedule'>
                <span className='about-project__schedule-backend'>
                    1 неделя
                </span>
                <span className='about-project__schedule-frontend'>
                    4 недели
                </span>
            </div>
        </section>
    )
}

export default AboutProject