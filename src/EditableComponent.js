
import "./App.css"
import App from './App'
import React from "react";


function EditableComponent(props){
      
    // const [Username,setusername]=React.useState('abc@gmail.com');
    // const [Password,setpassword]=React.useState('');
    return(
        <form className="App">
            <label>
           Username: <input placeholder={props.username} type="email" onChange={changeContent}></input>
            </label>

            <label>
            password:<input placeholder={props.password} onChange={changeContent2} type="password"></input>
            </label> 
            <button>Login</button>
        </form>
    );
    function changeContent(event){
        props.setusername(event.target.value);
        // console.log(event.target.value); 
    }
    function changeContent2(event){
        this.props.setpassword(event.target.value);
        // console.log(event.target.value); 
    }
}

export default EditableComponent;