import { Context, Request } from "koa";

export interface IBodyContext<V> extends Context {
   request: IBodyRequest<V>;
}
interface IBodyRequest<V> extends Request {
   body?: V;
}
