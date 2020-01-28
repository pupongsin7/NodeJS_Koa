const route = require('koa-router'); //ทำการเรียก Router
const Router = new route()

Router.get('/test',async ctx => { 
    console.log('test path /test')
    ctx.body = "response from /test"
})
Router.post('/testPOST',async ctx => { 
    let data = ctx.request.body
    console.log(data)
    ctx.body = data
})
module.exports = Router
