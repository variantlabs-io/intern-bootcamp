import { IRouter, Router } from "express";

const router = Router();

export const getRoutes = (): Router => {
  router.get("/login", (req, res) => {
    return res.send("<h1> Hello </h1>");
  });
  return router;
};
