import express, { Request, Response, NextFunction } from "express";
import { loginRoute } from "./routes/login";
import { userRoute } from "./routes/user";

export const runExpress = () => {
  const app = express();

  app.use(express.json());

  app.use(express.urlencoded());

  app.use("/login", loginRoute());

  app.use("/user", userRoute());

  app.listen(3000, () => {
    console.log("server started at port 3000");
  });
};
