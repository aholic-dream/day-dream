import { IRouterParamContext } from 'koa-router'

export function getUserList(ctx: IRouterParamContext, next: Function) {
  let list = [{ id: 1, name: 'cs' }]
  next()
}
