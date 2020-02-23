// import { Context } from "koa";
import { IParamContext, IBodyContext, INumberParam, IidParam } from "ts/context";
import { IMessageBody } from "ts/body";
import { MessageDbService } from "database";

import { parseListNumber } from "./parser.helper";

/**
 *  Message controller for router branch 'message'
 */
export class MessageService {
   /**
    * Endpoint for GET method in route /message/list/:number, return to http-client 10 paginated messages
    * @param ctx improved koa context with parameter number list
    */
   public static async listEndpoint(ctx: IParamContext<INumberParam>): Promise<void> {
      try {
         const number = parseListNumber(ctx.params.number);
         const list = await MessageDbService.selectList(number);

         ctx.status = 200;
         ctx.body = list;
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
   /**
    * Endpoint fot GET method in route /message/single/:id, return message by id
    * @param ctx improved koa context with additional id parametr in params
    */
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
   /**
    * Endpoint for POST method in route /message, create new message with input data, return 201 and created message
    * @param ctx improved koa context with typed body in request
    */
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
   /**
    * Endpoint for PUT method on route /message/single/:id, update message by id and input body, return 200 and updated
    * @param ctx improved koa context with id in ctx.params, important to find message by id and update by body
    */
   public static async updateEndpoint(ctx: IParamContext<IidParam>): Promise<void> {
      try {
         const updated = await MessageDbService.update(ctx.params.id, ctx.request.body as IMessageBody);

         ctx.status = 200;
         ctx.body = updated;
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
   /**
    * Endpoint fot DELETE method in route /message/single/:id, delete message by input id
    * @param ctx improved koa context with id in params
    */
   public static async deleteEndpoint(ctx: IParamContext<IidParam>): Promise<void> {
      try {
         await MessageDbService.del(ctx.params.id);

         ctx.status = 204;
      } catch (err) {
         ctx.app.emit("error", err, ctx);
      }
   }
}
