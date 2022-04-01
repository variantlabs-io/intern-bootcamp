import React from 'react';
import logo from './logo.svg';
import './App.scss';
import LeftContent from './components/LeftContent'
import MiddleContent from './components/MidContent'
import RightContent from './components/RightContent'
import UserContext from './context/UserContext'




function App() {
  
 const[id,setId]=React.useState("");
 const [user, setUser]=React.useState("Dheeraj");

  function getId(buttonid:string){
   setId(buttonid);
   
   
  }
  return (
    <UserContext.Provider value={user}>
    <div className="App">
    
      <div className="left-content">
      <LeftContent getId={getId}></LeftContent>
      </div>
      <div  className='mid-content'>   
      <MiddleContent  id={id}  ></MiddleContent>
      </div>
      
      <div className='right-content'>
      <RightContent></RightContent>
      </div>

    </div>
    </UserContext.Provider>
  );
}

export default App;
