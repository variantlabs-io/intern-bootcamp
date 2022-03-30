function HomeComponent(props){

     return(
         <div>
         <h1>Home Component</h1>
         <h2>Username: {props.username}</h2>
         <h2>password: {props.password}</h2>
         </div>
     );
}
export default HomeComponent;