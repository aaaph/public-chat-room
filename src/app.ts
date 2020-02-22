import Koa from "koa";
import bodyparser from "koa-bodyparser";
import logger from "koa-logger";
import cors from "@koa/cors";

import { registerAlieses } from "./lib";
registerAlieses(__dirname, ["lib", "database", "model", "service", "types", "middleware", "router"]);

import { errorHandlerMiddleware } from "middleware";
import { rootRouter } from "router";

const app = new Koa();

app.use(logger())
   .use(bodyparser())
   .use(cors())
   .use(rootRouter.routes());

app.on("error", errorHandlerMiddleware);
export { app };
