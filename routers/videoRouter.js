import express from "express";
import { deleteVideoController, editVideoController, uploadController, videoDetailController, videosController } from "../controller/videoController";
import routes from "../routes";

const videoRouter = express.Router();


videoRouter.get(routes.upload, uploadController);
videoRouter.get(routes.videoDetail, videoDetailController);
videoRouter.get(routes.editVideo, editVideoController);
videoRouter.get(routes.deleteVideo, deleteVideoController);

export default videoRouter;





