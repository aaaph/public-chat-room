import { Context } from "koa";
import { HttpError } from "http-errors";

const errorHandlerMiddleware = async (err: HttpError, ctx: Context): Promise<void> => {
   console.log(err.stack);

   ctx.status = err.status || err.statusCode || 500;
   ctx.res.end(err.message);
};

export { errorHandlerMiddleware };
