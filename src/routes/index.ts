import { IRouter, Router } from "express";
const { faker } = require('@faker-js/faker');


// parse application/json





let users=[];

for(let i=0;i<5;i++)
{
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let password= faker.internet.password()

    let name=(firstName+' '+lastName);
    users.push({
        "name":name,
        "password":password
    });
}


console.log(users);
const router = Router();

export const getRoutes = (): Router => {
  router.get("/", (req, res) => {
    return res.sendFile(__dirname +"/login.html");

  
  });


  router.post("/login", (req, res) => {

    const { username , password  } = req.body;
    console.log(username);
    console.log(password);

    const foundUser = users.find((user_temp) => user_temp.name === username && user_temp.password === password );
    if(foundUser=== undefined){
        
        res.sendFile(__dirname + "/failure.html")
    }
    else{
        
        res.sendFile(__dirname + "/success.html");
    }


    return res.sendFile(__dirname +"/failure.html");

  
  });
    return router;
    
};
