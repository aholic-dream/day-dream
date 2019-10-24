import { IRouterParamContext } from 'koa-router'
import { ParameterizedContext } from 'koa'

export function getUserList(ctx: ParameterizedContext, next: Function) {
  let list = [{ id: 1, name: 'cs' }]
  ctx.body = list
  next(list)
}
