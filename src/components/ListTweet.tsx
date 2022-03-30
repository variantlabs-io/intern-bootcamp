import React from 'react';
import {Tweet}from '../App';
import TweetCard from './TweetCard';

interface IListTweetProps{
    tweets:Tweet[];
    deleteTweet:(tweet: Tweet)=>void;

}

const ListTweet=({tweets, deleteTweet}:IListTweetProps)=>{

    const handleDelete=(event:React.MouseEvent, tweet: Tweet)=>{
        event.preventDefault();
        console.log("Clicked on delete for: "+tweet);
        deleteTweet(tweet);

    }

    let noTweets=<p>No Tweets</p>
    let listTweets=  tweets.map((tweet:Tweet) =>{
        return(
        <TweetCard key={tweet.id}>
            <div>{tweet.id}</div>
           <div>{tweet.message}</div>
           <button onClick={(e)=>handleDelete(e, tweet)}>Delete</button>
        </TweetCard>
        )
   })

   if(tweets.length === 0){
       return <div className='list-tweet'>{noTweets}</div>
   }else{
           return <div className='list-tweet'>{listTweets}</div>
       }
   
    // return(
    //     <div className='list-tweet'>
    //         {tweets.length<=0 ? noTweets:listtweets}
          
    //     </div>
    // );
}

export default ListTweet;