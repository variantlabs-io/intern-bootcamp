import express from "express";
import { getRoutes } from "./routes";

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use("/", getRoutes());



const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
