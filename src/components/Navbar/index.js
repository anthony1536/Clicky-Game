import React from 'react';
import './style.css';

function navbar(props){

    return(
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">Clicky Game!</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <h5>Top Score: {props.topScore}</h5>
                        </li>                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbar;