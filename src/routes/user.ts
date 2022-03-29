import { IRouter, Router } from "express";
const { faker } = require('@faker-js/faker');
// import axios from "axios";
// const url = require('url');

const router = Router();

export const getUserRoutes = (): Router => {

  router.get("/data",async (req , res) => {
    // const size = req.query.size;
    // user/data?size=10
    const { size } = req.query;

    interface MyObject { // define the object (singular)
      email: String;
      password : String;
    }
    let tempArray: MyObject[] = [];
    for (let i = 0; i < parseInt(size); i++){
      tempArray.push({
        email: faker.internet.email(),
        password: faker.internet.password()
      });
    }

    res.status(202).send(tempArray);
  });
  return router;
};
