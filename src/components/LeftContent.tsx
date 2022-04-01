import React from 'react';
import './LeftContent.scss';

function LeftContent(props:any){

    function handleClick(e:any){

     //  console.log(e.target )
        props.getId(e.target.id);

    }
    

    return(
        <div className="button">
           <button id='home-button' onClick={handleClick}>Home</button>
           <button id='explore-button' onClick={handleClick}>Explore</button>
           <button id='notifications-button' onClick={handleClick}>Notifications</button>
           <button id='messages-button' onClick={handleClick} >Messages</button>
           <button id='bookmarks-button' onClick={handleClick}>Bookmarks</button>
           <button id='lists-button' onClick={handleClick}>Lists</button>
           <button id='profile-button' onClick={handleClick}>Profile</button>
           <button id='more-button'onClick={handleClick}>More</button>
           <button id='tweet-button' onClick={handleClick} className='tweet'>Tweet</button>
        </div>
    )
}

export default LeftContent;