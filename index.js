const Koa = require('koa');
const app = new Koa();
const BodyParser = require('koa-bodyparser'); //ทำการเรียก bodyparser เพื่อรับ body from method POST
const cors = require('@koa/cors'); //ทำการเรียก cors เพื่อกำหนดสิทธิ
const router = require('./routes/routes')  //ทำการเรียกไฟล์ที่เรา router มาใส่ตัวแปร

app.use(BodyParser()) // ต้องไว้ด้านบน Routes มีไว้รับ Body Method Post
app.use(
    cors({ //ไว้กำหนดสิทธิ Cross-Origin Resource Sharing(CORS)
        origin: '*',
        allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
        exposeHeaders: ['X-Request-Id'],
    }),
)
app.use(router.routes()) //และให้ app ทำการเรียกใช้ router



console.log("App Start Port 3000")
app.listen(3000);