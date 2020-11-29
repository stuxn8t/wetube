import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.set('view engine',"pug");

app.use(helmet());
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
app.use(morgan("dev"))

app.use(localsMiddleware)


app.use(routes.home, globalRouter); // => spec: globalRouter.js
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;