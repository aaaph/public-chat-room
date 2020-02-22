import Router from "koa-router";

const messageRouter = new Router();

messageRouter.get("/list/:number", ctx => {
   ctx.body = "list/number";
});
messageRouter.get("/single/:id", ctx => {
   ctx.body = "target";
});
messageRouter.post("/", ctx => {
   ctx.body = "create";
});

export { messageRouter };
