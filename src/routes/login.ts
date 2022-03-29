import { Router, Request, Response } from "express";

const router = Router();

interface CustomInterface extends Request {
  token?: string;
}

export const loginRoute = (): Router => {
  // 1. Route Parameter
  // 2. Query Parameter

  router.get("/:content/:number", (req: Request, res: Response) => {
    const { content, number } = req.params;
    res.send(`Hello ${content} ${number}`);
  });

  router.get("/", (req: Request, res: Response) => {
    const query = { ...req.query };
    res.json(query);
  });

  router.post("/", (req: CustomInterface, res: Response) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin") {
      res.send("Logged in + ");
    } else {
      res.send("Invalid credentials");
    }
  });

  return router;
};
