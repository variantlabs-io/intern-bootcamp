import { IRouter, Router } from "express";
import axios from "axios";

const router = Router();

export const getUserRoutes = (): Router => {
  router.get("/get", async (req, res) => {
    const { url } = req.query;

    const response = await axios.get(url as string);

    return res.json({
      ...response.data,
    });
  });
  return router;
};
