import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(props) {
    return(
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__content'>
                <span className='footer__copyright'>&copy; 2020</span>
                <ul className='footer__links'>
                    <li className='footer__links-item'><Link to="#" className='footer__link' target='_blank'>Яндекс.Практикум</Link></li>
                    <li className='footer__links-item'><Link to="#" className='footer__link' target='_blank'>Github</Link></li>
                    <li className='footer__links-item'><Link to="#" className='footer__link' target='_blank'>Facebook</Link></li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer