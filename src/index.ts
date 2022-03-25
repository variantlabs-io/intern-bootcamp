import express from "express";
import { getLoginRoutes } from "./routes/login";
import { getSignUpRoutes } from "./routes/signup";
import { getUserRoutes } from "./routes/user";

const app = express();
app.use(express.json());

app.use("/", getLoginRoutes());
app.use("/signup", getSignUpRoutes());
app.use("/user", getUserRoutes());

app.get("/", (_, res) => {
  res.send("Hello World");
});

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
