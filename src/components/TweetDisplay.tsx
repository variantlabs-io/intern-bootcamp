import React from 'react';
import {Tweet} from '../App'


function TweetDisplay(props:any){

    let noTweets=<p>No Tweets</p>
    let listTweets= props.tweets.map((tweet:Tweet) =>{
        return(
            <div>
           <div>{props.tweets.message}</div>
           </div>
            )
   })


   if(props.tweets.length === 0){
       return <div className='list-tweet'>{noTweets}</div>
   }else{
           return <div className='list-tweet'>{listTweets}</div>
       }
   


}

export default TweetDisplay;