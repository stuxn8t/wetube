import express from "express";
import {
  getchangePasswordController,
  geteditProfileController,
  postChangePassword,
  postEditProfile,
  userDetailcontroller,
} from "../controller/userController";
import routes from "../routes";
import { uploadAvatar, onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, geteditProfileController);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getchangePasswordController);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetailcontroller); // :id 와 같이 변수값이 들어갔을땐 마지막줄에 추가해야 위 2개 라우팅이 정상적으로 작동함

export default userRouter;

/*
userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/password", (req, res) => res.send('user password'));
*/
