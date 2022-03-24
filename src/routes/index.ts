import { IRouter, Router } from "express";

const router = Router();

// @ts-ignore
export const getRoutes: Router = () => {
  router.get("/", (req, res) => {
    return res.send("<h1> Hello </h1>");
  });
  return router;
};
