import React, { useEffect } from 'react';
import './MidContent.scss'
import {Tweet} from "../App";
import TweetDisplay from './TweetDisplay'



function MiddleContent(props:any){

    const[tweet,setTweet]=React.useState("");
    const [tweets, setTweets]= React.useState<Tweet []>([]);
    const[isTweetDisabled, setIsTweetDisabled]=React.useState(true);
    
    const HomeComponent = () => (
        <div><h3>Home</h3>
            <p>          
            <b> Star Sports</b> @StarSportsIndia·2h<br/>
            These 2⃣ icons are ready to take over the! Kyunki aise legends ka aana, #YehAbNormalHai! <br/>
            <br/>
        
        
            Catch <a href="#">@RaviShastriOfc</a> & <a href="#">@ImRaina</a>
            with <a href="#">@MayantiLanger_B</a> chat about commentary, players & more!😍<br/>
            <br/>
            Coming soon!<br/>
            <br/>
            <img  className="poster" src="https://pbs.twimg.com/media/FOhrWlLWYAECj19?format=jpg&name=small"/>
            </p>
        </div>

    );

    const ExploreComponent=()=>(
        <div>
            <h2 >Explore</h2><p>Ukraine conflict<h3>LIVE</h3>
            <p>Over 22,500 Indian citizens were evacuated from Ukraine,</p><h3>Trending</h3>1.Cricket . Trending<br/><b>Starc</b><br/>5,334 Tweets<br/> 
            <br/>2·Politics · Trending<br/><b>#OdishaLowestUnemployment</b><br/>5,034 Tweets<br/><br/>3·Politics · Trending<br/><b>#KejriwalKaChallenge</b><br/>
            5,872 Tweets<br/><br/>4·Cricket · Trending<br/><b>#AUSvsPAK</b><br/>2,382 Tweets<br/><br/>5·Trending<br/>
            <b>#CoinSwitchKaDoglapan</b><br/>2,743 Tweets<br/><br/>6·Trending<br/><b>#UnbelievableButTrue</b><br/>7,107 Tweets<br/><br/>7·Trending<br/>
            <b>vishal mishra</b><br/>4,160 Tweets<br/><br/>8·Movies & TV · Trending<br/><b>PRATIKFAM FOR LIFE</b><br/>198K Tweets<br/><br/>9·Entertainment · Trending<br/>
            <b>KYA KAR DIYA OUT TOMORROW</b><br/>112K Tweets<br/><br/>10·Trending<br/><b>BSN</b>L<br/>1,809 Tweets<br/><br/>11·Trending<br/><b>ICICI Lombard</b><br/>
            2,904 Tweets<br/><br/>12·Trending<br/><b>Siddharth Trivedi</b><br/><br/>
            </p>
        </div>

    );

    const NotificationsComponent=()=>(
        <div><h2>Notifications</h2><h2>Nothing to see here — yet</h2>When someone mentions you, you’ll find it here.</div>
    );

    const MessagesComponent=()=>(
        <div><h2>Messages</h2><h2>Send a message, get a message</h2>Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!</div>
    );

    
    const BookmarksComponent=()=>(

        <div><h2>Bookmarks</h2>
        <h2>Save Tweets for later</h2>
        Don’t let the good ones fly away! Bookmark<br/> Tweets to easily find them again in the future.</div>
    );


    const ListsComponent=()=>(
        <div><h3>Lists</h3><h3>Pinned Lists</h3>
        Nothing to see here yet — pin your favorite Lists to access them quickly.
        <h3>Discover new Lists</h3>
       
        Show more
        Your Lists
        You haven't created or followed any Lists. When you do, they'll show up here.
        </div>
    );

    const ProfileComponent=()=>(
        <div>
            <h3>Dheeraj Sharma</h3>
                     @AkkaduSharma
                     .
                     Joined May 2020<br/>
                     46 Following  10 Followers <br/>
     
                     <p><b>Tweets &nbsp; &nbsp;&nbsp;&nbsp; Tweets & replies &nbsp;&nbsp;&nbsp;&nbsp; Media &nbsp;&nbsp;&nbsp; &nbsp;Likes</b></p>
                     <hr/>
                     <h3>Dheeraj Sharma's Tweet</h3>.
        </div>

    );

    const MoreComponent=()=>(

        <div>
            <h3> Topics</h3>
            <h3> Moments</h3>
            <h3>Newsletters</h3>
            <h3>Twitter for Professionals</h3>
            <h3>Twitter Ads</h3>
            <h3>Analytics</h3>
            <h3>Settings and privacy</h3>
            <h3>Help Center</h3>
            <h3>Display</h3>
            <h3>Keyboard shortcuts</h3>
        </div>

    );

    const TweetComponent=()=>(
        <div>        
            <h2>What's Happening</h2>
            <p>What you wanna Tweet about?</p>
            <form>
            <label>What's in your Mind</label><br/>
            <input type="text" value={tweet} onChange={(e) => setTweet(e.target.value) } />
                
            <button className='posttweet'  type="submit" disabled={isTweetDisabled}  onClick={handleSubmit} >Tweet</button>
            </form>
            <div>   
                {tweets.map((tweet:Tweet) =>(
                  <div>
                    <div key={tweet.message}>{tweet.message}</div>
                 </div>
            ))
            }
            </div>
        
     
                
        </div>
    );


    function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        setTweets([...tweets,
            {
                message:tweet
            }]
            );
      
           
        }
        
        


    useEffect(()=>{
        if(tweet.length>0){
                    
                    setIsTweetDisabled(false);
            }
                 else{
                 setIsTweetDisabled(true);
                 }
                 
    },[tweet]);



   
    const renderComponent=(id:string) => {
        switch (props.id) {
            case 'home-button':
              return <HomeComponent />;
            case 'explore-button':
              return <ExploreComponent />;
            case 'notifications-button':
                return <NotificationsComponent/>
            case 'messages-button':
                return <MessagesComponent/>
            case 'bookmarks-button':
                return <BookmarksComponent/>
            case 'lists-button':
                return <ListsComponent/>
            case 'profile-button':
                return <ProfileComponent/>
            case 'more-button':
                return <MoreComponent/>
            case 'tweet-button':
                return <TweetComponent/>

            default:
                return <HomeComponent/>
          }

    };







  //  console.log(props.getId());
    return(
         <div className="App">{renderComponent(props.id)}</div>
    )
}

export default MiddleContent;