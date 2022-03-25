import { IRouter, Router } from "express";

const router = Router();

export const getSignUpRoutes = (): Router => {
  router.post("/signup", (req, res) => {
    return res.send("<h1> Hello </h1>");
  });

  return router;
};
