import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faGear, faDownload, faShareFromSquare} from '@fortawesome/free-solid-svg-icons'
import Instruction from './Instruction';
import FeatureConrol from './FeatureControl';
import Share from './Share';

export default function Home(){
    const [buttonText, setButtonText] = useState("Start Game");
 
    const handleClick = () => {
        setButtonText("Let's get started!");
 
        setTimeout(() => {
            setButtonText("Start Game");
        },3500); 
    };

    const[buttonInstruction, setButtonInstruction] =useState(false);
    const[dotsControl, setDotsControl] =useState(false);
    const[buttonShare, setButtonShare] =useState(false);
    // const[lightMode, setLightMode] = useState(true);

    // function toggleLightMode(){
    //     setLightMode(prevMode => !prevMode)
    // }

    return(
    <main>
    <div className='home-card'>
        <h1 className='home-title'>MASTER MIND</h1>
        <button className='start-btn' onClick={handleClick} >{buttonText}</button>
        <ul className='nav-bar'>
            <li className='selection-item'> 
            <FontAwesomeIcon icon={faQuestion}  style={{color: "#edf2f4",}} onClick={() => setButtonInstruction(true)} /> 
            </li>

            <Instruction trigger={buttonInstruction} setTrigger={setButtonInstruction}>
            </Instruction>

            <li className='selection-item'>
            <FontAwesomeIcon icon={faGear} style={{color: "#edf2f4",}} onClick={() => setDotsControl(true)} />
            </li>

            <FeatureConrol trigger={dotsControl} setTrigger={setDotsControl}>
            </FeatureConrol>

            <li className='selection-item'>
            <FontAwesomeIcon icon={faShareFromSquare} style={{color: "#edf2f4",}} onClick={() => setButtonShare(true)}/>
            </li>
            
            <Share trigger={buttonShare} setTrigger={setButtonShare}></Share>

            <li className='selection-item'>
            <FontAwesomeIcon icon={faDownload} style={{color: "#edf2f4",}}/>
            </li>
        </ul>
    </div>
    </main>
    )
}
