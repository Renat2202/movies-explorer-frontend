import React from 'react';
import './Tumbler.css';

function Tumbler(props) {
    return(
        <label className="switch">
            <input type="checkbox" id='short-film' name='short-film'></input>
            <span className="slider round"></span>
        </label>
    );
}

export default Tumbler