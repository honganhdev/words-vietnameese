/**
 * Word Routes
 */

import { Router } from "express";
import * as wordController from "../controllers/wordController";

const routes = new Router();

routes.get("/", wordController.getOne);
routes.get("/noitu", wordController.redirectRahub);

export default routes;
