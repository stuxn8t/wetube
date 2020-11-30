import express from "express";
import { changePasswordController, editProfileController, userDetailontroller, usersController } from "../controller/userController";
import routes from "../routes";

const userRouter = express.Router();


userRouter.get(routes.editProfile, editProfileController);
userRouter.get(routes.changePassword, changePasswordController);
userRouter.get(routes.userDetail(), userDetailontroller); // :id 와 같이 변수값이 들어갔을땐 마지막줄에 추가해야 위 2개 라우팅이 정상적으로 작동함 

export default userRouter;



/*
userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/password", (req, res) => res.send('user password'));
*/
