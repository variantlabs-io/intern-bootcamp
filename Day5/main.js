//random data
let data = [
    {
        id:0,
        name:"Anish Kumar",
        avartar:"https://i.pravatar.cc/150",
        title:"Good Morning Media 🍵 ⛅",
        body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolorum? Sed velit itaque blanditiis illo!"
    },
    {
        id:1,
        name:"John Joe",
        avartar:"https://i.pravatar.cc/150",
        title:"Good Morning Media 🍵 ⛅",
        body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolorum? Sed velit itaque blanditiis illo!"
    },
    {
        id:2,
        name:"Jane Doe",
        avartar:"https://i.pravatar.cc/150",
        title:"Good Morning Media 🍵 ⛅",
        body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolorum? Sed velit itaque blanditiis illo!"
    },
    {
        id:3,
        name:"Ron Doe",
        avartar:"https://i.pravatar.cc/150",
        title:"Good Morning Media 🍵 ⛅",
        body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolorum? Sed velit itaque blanditiis illo!"
    },

]



let loadAllPosts = ()=>{
    let posts = document.getElementById("posts")
    posts.innerHTML = data.map((post , index)=>(
        `
        <div class="card" id="${index}"  onClick="getPost(this.id)">
            <div class="card__header">
                <img class="profile__img" height="55px" width="55px" src="${post.avartar}/${index}" alt="">
                <p class="profile__name">${post.name}</p>
                <p class="profile__info">@${post.name.toLowerCase()}  <span>. 14h</span> </p>
            
            </div>
            <div class="card__body">
                <div class="post__content">
                <strong>${post.title} 🍵 ⛅ </strong>
                <p>${post.body}</p> 
                </div>
                <img class="post__img" src="./img/post.png" alt="">
            </div>
            <div class="card__footer">
                <i class="icon far fa-heart"></i>
                <i class="icon fa-solid fa-comment"></i>
                <i class="icon fa-solid fa-retweet"></i>
                <i class="icon fa-solid fa-arrow-up-from-bracket"></i>
            </div>
        </div>
    `
))

}

if(window.location.href == "http://127.0.0.1:5500/"){loadAllPosts()}


let changeLocation = ()=>{
    window.location.href = "http://127.0.0.1:5500/"
}


let getPost = (id)=>{
    let posts = data.filter((item)=>item.id == id)
    let post = posts[0]
    let home = document.getElementById("posts")
    let urlPath = `http://127.0.0.1:5500/posts/${id}`

    home.innerHTML = `
    <div class="card">
        <i class="fa-solid fa-backward btn" onclick="changeLocation()" ></i>
        <div class="card__header">
            <img class="profile__img" height="55px" width="55px" src="${post.avartar}/${+id}" alt="">
            <p class="profile__name">${post.name}</p>
            <p class="profile__info">@${post.name.toLowerCase()}  <span>. 14h</span> </p>
        
        </div>
        <div class="card__body">
            <div class="post__content">
            <strong>${post.title} 🍵 ⛅ </strong>
            <p>${post.body}</p> 
            </div>
            <img class="post__img" src="./img/post.png" alt="">
        </div>
        <div class="card__footer">
            <i class="icon far fa-heart"></i>
            <i class="icon fa-solid fa-comment"></i>
            <i class="icon fa-solid fa-retweet"></i>
            <i class="icon fa-solid fa-arrow-up-from-bracket"></i>
        </div>
    </div>
    `
    window.history.pushState({"html":post,"pageTitle":'posts'}, "", urlPath);
}
















