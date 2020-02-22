import Koa from "koa";
import bodyparser from "koa-bodyparser";
import logger from "koa-logger";
import cors from "@koa/cors";
import Router from "koa-router";

import { errorHandlerMiddleware } from "./middleware";

const app = new Koa();
const router = new Router();

app.use(logger())
   .use(bodyparser())
   .use(cors())
   .use(router.routes());

app.on("error", errorHandlerMiddleware);
export { app };
