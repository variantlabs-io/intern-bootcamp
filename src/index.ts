import express from "express";
import { getLoginRoutes } from "./routes/login";
import { getSignUpRoutes } from "./routes/signup";
import { getUserRoutes } from "./routes/user";

const app = express();
app.use(express.json());
app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", getLoginRoutes());
app.use("/", getSignUpRoutes());
app.use("/user", getUserRoutes());

app.get("/", (_, res) => {
  // res.send("Hello World");
  res.set({
    "Allow-access-Allow-Origin": '*'
  })
  return res.redirect("./views/index.html");
});

const PORT: number = 8000;
app.listen(PORT, ()=>{
  console.log(`Server is listening on port ${PORT}`);
});