import express from "express";
import routes from "../routes";
import {
  getjoinController,
  getloginController,
  logoutController,
  postjoinController,
  postloginController,
} from "../controller/userController";
import {
  homeController,
  searchController,
} from "../controller/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getjoinController);
globalRouter.post(routes.join, postjoinController, postloginController);

globalRouter.get(routes.login, getloginController);
globalRouter.post(routes.login, postloginController);

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.search, searchController);
globalRouter.get(routes.logout, logoutController);

export default globalRouter;
