import React from 'react';
import './Footer.css';

function Footer(props) {
    return(
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__content'>
                <span className='footer__copyright'>&copy; 2020</span>
                <ul className='footer__links'>
                    <li className='footer__links-item'><a href="https://yandex.ru/" className='footer__link' target='_blank' rel="noreferrer">Яндекс.Практикум</a></li>
                    <li className='footer__links-item'><a href="https://github.com/" className='footer__link' target='_blank' rel="noreferrer">Github</a></li>
                    <li className='footer__links-item'><a href="https://www.facebook.com/" className='footer__link' target='_blank' rel="noreferrer">Facebook</a></li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer