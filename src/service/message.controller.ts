// import { Context } from "koa";
import { IParamContext, IBodyContext, INumberParam, IidParam } from "ts/context";
import { IMessageBody } from "ts/body";

/**
 *  Message controller for router branch 'message'
 */
export class MessageService {
   public static async listEndpoint(ctx: IParamContext<INumberParam>): Promise<void> {
      try {
         console.log(ctx.params.number);
         // return paginated list by number from database
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
   public static async singleEndpoint(ctx: IParamContext<IidParam>): Promise<void> {
      try {
         // return target message by id from database
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
   public static async createEndpoint(ctx: IBodyContext<IMessageBody>): Promise<void> {
      try {
         console.log(ctx.request.body);
         console.log(ctx.request.body.author);
         ctx.body = 123;
         //  create new message, validate it , insert into databas
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
}
