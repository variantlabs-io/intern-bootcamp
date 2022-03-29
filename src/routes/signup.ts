import { IRouter, Router } from "express";

const router = Router();

export const getSignUpRoutes = (): Router => {
  router.get("/signup", (req, res) => {
    res.redirect("./views/signup.html");
  });
  router.post("/signup", (req, res) => {
    const { username, password } = req.body;
    if (username != '' && password != '') {
      let str: String;
      str= "<h1>" + "Email Id: " + username + "</h1><br>";
      str+="<h1>" + "Password: " + password + "</h1><br>";
      return res.status(202).send(str);
    }
    else {
      return res.status(400).json({
        success: false,
        message: "Signup Failed",
      });
    }

  });

  return router;
};