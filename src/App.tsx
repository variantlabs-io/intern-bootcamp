import React from 'react';
import logo from './logo.svg';
import './App.scss';
import PostTweet from './components/PostTweet'
import ListTweet from './components/ListTweet'

export interface Tweet{
  id:number;
  name:string;
  message:string;

}

function App() {

const [tweets, setTweets]= React.useState<Tweet []>([]);

const addTweet=(tweet:Tweet)=>{
  setTweets([...tweets, tweet]);
}

const deleteTweet=(tweet:Tweet)=>{
  setTweets(tweets.filter(t=>t.id!==tweet.id))
}

  return (
    <div className="App">
      <PostTweet tweets={tweets}  addTweet={addTweet}></PostTweet>
      <ListTweet tweets={tweets} deleteTweet={deleteTweet}></ListTweet>
    </div>
  ); 
}

export default App;
