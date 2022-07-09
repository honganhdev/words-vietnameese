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
  res.redirect(
    "https://discord.com/api/oauth2/authorize?client_id=985556729523744828&permissions=274877985808&scope=bot"
  );
});

routes.all("*", (req, res, next) =>
  next(new APIError("Not Found!", HTTPStatus.NOT_FOUND, true))
);

export default routes;
