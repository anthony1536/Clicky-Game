import React from 'react';
import './style.css';

function infoCard(props){
    return(
        <div className="row center-align">
            <div className="col s12">
                <div className='container'>
                    <div className="card-panel white infoCard">
                        <div className='container'>
                            <h3 className=' card-title'>Clicky Game!</h3>
                            <span className="flow-text ">Click on an image to earn points, but don't click on any more than once!</span>
                            <h3>Score: {props.currentScore}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default infoCard;