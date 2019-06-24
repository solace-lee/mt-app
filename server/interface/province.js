import Router from 'koa-router'
import Province from '../dbs/models/province'

let router = new Router({
  prefix: '/location'
})

router.get('/getProvince', async (ctx, next) => {
  let province = await Province.find()
  ctx.body = {
    province: province.map(item => {
      return {
        id: item.id,
        name: item.value
      }
    }),
    status: 200,
    code: 0
  }
})

export default router
