/* eslint-disable no-console */
import express from "express";

import path from "path";
import dotenv from "dotenv";
import ApiRoutes from "./routes";

dotenv.config();

console.log(process.env.PORT);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", ApiRoutes);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${process.env.PORT}`);
});
