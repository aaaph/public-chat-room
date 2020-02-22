import { Context } from "koa";

export interface IParamContext<V> extends Context {
   params: V;
}
