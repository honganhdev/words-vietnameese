/**
 * API Routes
 */

import { Router } from "express";
import HTTPStatus from "http-status";
import WordRoutes from "./words.routes";

import APIError from "../services/error";

const routes = new Router();

routes.use("/words", WordRoutes);

routes.get("/", (req, res) => {
  res.send("WoW! Bum 💀");
});

routes.all("*", (req, res, next) =>
  next(new APIError("Not Found!", HTTPStatus.NOT_FOUND, true))
);

export default routes;
