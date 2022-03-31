import React from 'react';
import logo from './logo.svg';
import './App.scss';
import LeftContent from './components/LeftContent'
import MiddleContent from './components/MidContent'
import RightContent from './components/RightContent'
import TweetDisplay from './components/TweetDisplay'

export interface Tweet{
 
  message:string;

}

function App() {
  
 const[id,setId]=React.useState("");

  function getId(buttonid:string){
   setId(buttonid);
   
   
  }
  return (
    <div className="App">
    
      <div className="left-content">
      <LeftContent getId={getId}></LeftContent>
      </div>
      <div  className='mid-content'>   
      <MiddleContent  id={id} ></MiddleContent>
      </div>
      
      <div className='right-content'>
      <RightContent></RightContent>
      </div>

    </div>
  );
}

export default App;
