import { AssertionError } from "assert";
import axios, { AxiosResponse } from "axios";

import { Router, Request, Response } from "express";

interface User {
  name?: string;
  email?: string;
}

const router = Router();

export const userRoute = (): Router => {
  router.get("/", async (req: Request, res: Response) => {
    const url = "https://jsonplaceholder.typicode.com/users/1";

    try {
      const response = await axios({
        method: "GET",
        url,
      });

      const userData: User = response.data;

      res.json({
        username: userData.name,
        email: userData.email,
      });
    } catch (e) {
      console.log(e);
    }
  });
  return router;
};
