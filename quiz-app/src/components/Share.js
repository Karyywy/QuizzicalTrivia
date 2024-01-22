import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { FacebookShareButton,WhatsappShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, LinkedinIcon} from "react-share";

export default function FeatureConrol(props){
    const sharePageUrl = "https://portfolioywy.netlify.app/";

    return (props.trigger)?(
    <div className='share-page'>
        <ul className='share-nav'>
            <li className='share-nav-lists'>Share</li>
            <li className='share-nav-lists share-nav-close' onClick={() => props.setTrigger(false)}><FontAwesomeIcon icon={faXmark} /></li>
        </ul>
        <ul className='share-button-container'>

        <li className='share-button'>
        <WhatsappShareButton url={sharePageUrl}
        title = 'MASTER MIND'
        >
            <WhatsappIcon className='app-circle'/> WhatsApp
        </WhatsappShareButton>
        </li>

        <li className='share-button'>
        <FacebookShareButton url={sharePageUrl}
        title = 'MASTER MIND'
        quote='Please Share This Post'
        >
            <FacebookIcon className='app-circle'/> Facebook
        </FacebookShareButton>
        </li>

        <li className='share-button'>
        <TwitterShareButton  url={sharePageUrl}
        title = 'MASTER MIND'
        >
            <TwitterIcon className='app-circle'/> X
        </TwitterShareButton>
        </li>

        <li className='share-button'>
        <LinkedinShareButton  url={sharePageUrl}
        title = 'MASTER MIND'
        summary='Master Mind will randomly assign 10 questions in order to let the player learn anything in anywhere!'
        >
            <LinkedinIcon className='app-circle'/> Linkedin
        </LinkedinShareButton>
        </li>

        </ul>
        {props.children}
    </div>
    ):"";
}