import Router from "koa-router";
import { MessageService } from "service";
import { uuidValidateMiddleware } from "middleware";

const messageRouter = new Router();

messageRouter.get("/list/:number", MessageService.listEndpoint);
messageRouter.get("/single/:id", uuidValidateMiddleware, MessageService.singleEndpoint);
messageRouter.post("/", MessageService.createEndpoint);
messageRouter.put("/single/:id", uuidValidateMiddleware, MessageService.updateEndpoint);
messageRouter.del("/single/:id", uuidValidateMiddleware, MessageService.deleteEndpoint);

export { messageRouter };
