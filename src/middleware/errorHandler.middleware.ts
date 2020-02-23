import { Context } from "koa";
import { HttpError } from "http-errors";

const errorHandlerMiddleware = async (err: HttpError, ctx: Context): Promise<void> => {
   console.log(err.stack);

   ctx.set("Content-Type", "application/json"); // bad idea...

   ctx.status = err.status || err.statusCode || 500;
   ctx.res.end(err.message);
};

export { errorHandlerMiddleware };
