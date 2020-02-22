import Router from "koa-router";
import { MessageService } from "service";

const messageRouter = new Router();

messageRouter.get("/list/:number", MessageService.listEndpoint);
messageRouter.get("/single/:id", MessageService.singleEndpoint);
messageRouter.post("/", MessageService.createEndpoint);

export { messageRouter };
