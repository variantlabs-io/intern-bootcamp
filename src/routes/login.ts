import { Router } from "express";

const router = Router();

export const getLoginRoutes = (): Router => {
  router.post("/login", (req, res) => {
    const userName: string = "admin";
    const passwordTemp: string = "admin";

    const { username, password } = req.body;

    if (username === userName && password === passwordTemp) {
      return res.json({
        success: true,
        message: "Login success",
      });
    }
    return res.json({
      success: false,
      message: "Login Failed",
    });
  });
  return router;
};
