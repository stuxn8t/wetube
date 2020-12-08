import express from "express";
import {
  deleteVideoController,
  geteditVideo,
  getuploadController,
  posteditVideo,
  postuploadController,
  videoDetailController,
} from "../controller/videoController";
import routes from "../routes";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getuploadController);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postuploadController);

videoRouter.get(routes.videoDetail(), videoDetailController);

videoRouter.get(routes.editVideo(), onlyPrivate, geteditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, posteditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideoController);

export default videoRouter;
