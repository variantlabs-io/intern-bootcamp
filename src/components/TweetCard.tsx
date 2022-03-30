import React from 'react';
import {Tweet} from '../App'
import './TweetCard.scss';

const TweetCard:React.FC<{}>=(props)=>{
    return(
    
    <div className='tweet' style={{color:'red'}}>

        {props.children}
    </div>
    );
};

export default TweetCard;