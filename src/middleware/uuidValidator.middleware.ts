import { Next } from "koa";
import { BadRequest } from "http-errors";

import { IParamContext, IidParam } from "ts/context";
import { validateUUID } from "service/api";

const uuidValidateMiddleware = async (ctx: IParamContext<IidParam>, next: Next): Promise<void> => {
   const { id } = ctx.params;
   if (!validateUUID(id)) {
      const err = new BadRequest("uuid validation error");
      ctx.app.emit("error", err, ctx);
   } else await next();
};
export { uuidValidateMiddleware };
