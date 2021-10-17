import React from 'react';
import './Tumbler.css';

function Tumbler(props) {
    const { isShortMoviesFiltered } = props;
    function handleTumblerOnChange(e) {
        props.tumblerOn(e.target.checked);
    } 
    return(
        <label className="switch">
            <input type="checkbox" id='short-film' name='short-film' onChange={handleTumblerOnChange} checked={isShortMoviesFiltered}></input>
            <span className="slider round"></span>
        </label>
    );
}

export default Tumbler