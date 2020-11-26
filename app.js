import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import { userRouter } from "./router";
const app = express();


const handleHome = (req, res) => res.send('hello from home');


const handleProfile = (req, res) => res.send("you are on my Profile");

app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan("dev"))

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;