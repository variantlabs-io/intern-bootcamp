import express from "express";
import { getRoutes } from "./routes";

const app = express();

// @ts-ignore
app.use("/", getRoutes());

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
