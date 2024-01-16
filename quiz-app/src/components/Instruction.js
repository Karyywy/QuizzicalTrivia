import React, { useState } from 'react';

export default function Instruction(props){
    return (props.trigger) ? (
        <div className='instrction-card'>
            <main className='instruction-inner'>
            <h1 className='instrction-title'>HOW TO PLAY!</h1>
            <p className='instruction-content'>
                Welcome to MASTER MIND! You will be assigned 10 questions.
                Each question is timed, you will assigned 45 secs to answer each question.
                Once you selected your choice, click "Check Answer" to see if you were correct!
                To win the quiz, you must complete every question.
               <span className='content-bold'> Please feel free to add this game to Home Screen on your device!</span>
            </p>
            <ul className='instrction'>
                <li className='instrction-list'>1. Click Start Game</li>
                <li className='instrction-list'>2. Select Your Difficulty</li>
                <li className='instrction-list'>3. Choose Your Category</li>
                <li className='instrction-list'>4. Click "Start!"</li>
            </ul>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
            {props.children}
        </main>
        </div>
    ):""; 
}

