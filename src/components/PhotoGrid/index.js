import React from 'react';
import './style.css';

//for i=3 make a row and in each one{ 
    //for each of the 4 pictures{make a column and card panel with an image}
// }

function photoGrid(props){
    let {currentShuffle, picPressed} = props;
    return(
        <div className='row'>
            <div className='container'>
                <div className='col s12'>
                    <div className='row'>
                            {
                                currentShuffle.map((current,i)=>{
                                    return(
                                        <div key={i} className='col s12 m6 l3 center-align'>
                                            <div className='hoverable card-panel'onClick={()=>picPressed(current)} ><img alt="Game Option"className="responsive-img" src={props.currentShuffle[i]}/></div>
                                        </div>
                                    )
                                })
                            }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default photoGrid;
