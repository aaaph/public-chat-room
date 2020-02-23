// import { Context } from "koa";
import { IParamContext, IBodyContext, INumberParam, IidParam } from "ts/context";
import { IMessageBody } from "ts/body";
import { MessageDbService } from "database";

import { parseInteger } from "./parser.helper";

/**
 *  Message controller for router branch 'message'
 */
export class MessageService {
   public static async listEndpoint(ctx: IParamContext<INumberParam>): Promise<void> {
      try {
         const number = parseInteger(ctx.params.number);
         const list = await MessageDbService.selectList(number);

         ctx.status = 200;
         ctx.body = list;
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
   public static async singleEndpoint(ctx: IParamContext<IidParam>): Promise<void> {
      try {
         const { id } = ctx.params;
         const message = await MessageDbService.selectById(id);

         ctx.status = 200;
         ctx.body = message;
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
   public static async createEndpoint(ctx: IBodyContext<IMessageBody>): Promise<void> {
      try {
         const created = await MessageDbService.insert(ctx.request.body);

         ctx.status = 201;
         ctx.body = created;
         //  create new message, validate it , insert into databas
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
   public static async updateEndpoint(ctx: IParamContext<IidParam>): Promise<void> {
      try {
         const updated = await MessageDbService.update(ctx.params.id, ctx.request.body as IMessageBody);

         ctx.status = 200;
         ctx.body = updated;
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
   public static async deleteEndpoint(ctx: IParamContext<IidParam>): Promise<void> {
      try {
         await MessageDbService.del(ctx.params.id);

         ctx.status = 204;
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
}
