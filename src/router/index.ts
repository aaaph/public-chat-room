import Router from "koa-router";
import { version1Router } from "./v1";

const rootRouter = new Router();

rootRouter.use("/api/v1", version1Router.routes(), version1Router.allowedMethods());

export { rootRouter };
