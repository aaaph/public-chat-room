import Router from "koa-router";

import { messageRouter } from "./message.router";

const version1Router = new Router();

version1Router.use("/message", messageRouter.routes());

export { version1Router };
