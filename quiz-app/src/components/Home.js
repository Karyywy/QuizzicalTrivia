import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faGear, faDownload, faShareFromSquare} from '@fortawesome/free-solid-svg-icons'

export default function Home(){
    const [buttonText, setButtonText] = useState("Start Game");
 
    const handleClick = () => {
        setButtonText("Loading...");
 
        setTimeout(() => {
            setButtonText("Let's get started");
        }, 300); 
    };

    return(
    <main>
    <div className='home-card'>
        <h1 className='home-title'>Quizzical</h1>
        <button className='start-btn' onClick={handleClick}>{buttonText}</button>
        <ul className='nav-bar'>
            <li>
            <FontAwesomeIcon icon={faQuestion} style={{color: "#edf2f4",}} /> 
            </li>
            <li>
            <FontAwesomeIcon icon={faGear} style={{color: "#edf2f4",}}/>
            </li>
            <li>
            <FontAwesomeIcon icon={faShareFromSquare} style={{color: "#edf2f4",}} />
            </li>
            <li>
            <FontAwesomeIcon icon={faDownload} style={{color: "#edf2f4",}}/>
            </li>
        </ul>
    </div>
    </main>
    )
}
