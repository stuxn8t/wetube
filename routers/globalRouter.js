import express from "express";
import routes from "../routes";
import passport from "passport";
import {
  getjoinController,
  getloginController,
  logoutController,
  postjoinController,
  postloginController,
  githubLogin,
  postGithubLogIn,
  getMe,
  facebookLogin,
  postFacebookLogin,
} from "../controller/userController";
import {
  homeController,
  searchController,
} from "../controller/videoController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getjoinController);
globalRouter.post(
  routes.join,
  onlyPublic,
  postjoinController,
  postloginController
);

globalRouter.get(routes.login, onlyPublic, getloginController);
globalRouter.post(routes.login, onlyPublic, postloginController);

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.search, searchController);
globalRouter.get(routes.logout, onlyPrivate, logoutController);

globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);

export default globalRouter;
