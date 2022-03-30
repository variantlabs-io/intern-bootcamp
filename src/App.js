import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from '/home/divyank/sample/src/HomeComponent.js'
import EditableComponent from './EditableComponent';
function App() {
  const [username,setusername]=React.useState("");
  const [password,setpassword]=React.useState("");

  return (
    <div className='App'>
        <HomeComponent username={username} password={password} ></HomeComponent>
        <EditableComponent username={username} password={password} setusername={setusername}></EditableComponent>
    </div>
  );
}

export default App;
