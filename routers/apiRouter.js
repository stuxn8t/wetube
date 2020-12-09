import express from "express";
import routes from "../routes";
import {
  postAddComment,
  postRegisterView,
} from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView); // :id 와 같이 변수값이 들어갔을땐 마지막줄에 추가해야 위 2개 라우팅이 정상적으로 작동함
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
