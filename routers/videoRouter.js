import express from "express";
import { deleteVideoController, editVideoController, getuploadController, postuploadController, videoDetailController, videosController } from "../controller/videoController";
import routes from "../routes";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();


videoRouter.get(routes.upload, getuploadController);
videoRouter.post(routes.upload, uploadVideo, postuploadController);

videoRouter.get(routes.videoDetail(), videoDetailController);
videoRouter.get(routes.editVideo, editVideoController);
videoRouter.get(routes.deleteVideo, deleteVideoController);

export default videoRouter;





