import * as Router from 'koa-router'
import { getUserList } from '../controller/userController'

const router = new Router({
  prefix: '/users'
})

router.get('/', getUserList)

export default router
