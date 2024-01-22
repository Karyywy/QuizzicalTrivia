import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun, faMusic, faVolumeHigh, faEllipsis} from '@fortawesome/free-solid-svg-icons'

export default function FeatureConrol(props){
    return(props.trigger)?(
        <div className="control-room">
            <nav className='control-inner'>
                <ul className='control-lists'>
                <li className='control-item'>
                <FontAwesomeIcon icon= {faSun} style={{color: "#edf2f4"}} />
                 {" "}Light
                </li>
                <li className='control-item'>
                <FontAwesomeIcon icon={faMusic} style={{color: "#edf2f4"}} />
                {" "}Music
                </li>
                <li className='control-item'>
                <FontAwesomeIcon icon={faVolumeHigh} style={{color: "#edf2f4"}}/>
                {" "}Sound
                </li>
                </ul>
                <div className='control-close' onClick={() => props.setTrigger(false)}><FontAwesomeIcon icon={faEllipsis} style={{color: "#6bffee",}} /></div>
                {props.children}
            </nav>
        </div>
    ): ""; 
}