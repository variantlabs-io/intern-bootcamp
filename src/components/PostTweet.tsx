import React from 'react';
import {Tweet} from '../App'

interface IPostTweetProps{
    addTweet: (tweet:Tweet)=>void;
    tweets: Tweet[];

}


const PostTweet=(props:IPostTweetProps )=>{
    const [tweet, setTweet]=React.useState('Hello world');
    
    const handleSubmit=(event: React.FormEvent)=>{
        event.preventDefault();
        
        props.addTweet({
            id: props.tweets.length + 1,
            name: "Dheeraj",
            message: tweet,
        });
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Post tweet</label>
                <input type="text" value={tweet} onChange={(e)=>setTweet(e.target.value)}
                 placeholder='Enter your tweet'></input>
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default PostTweet;