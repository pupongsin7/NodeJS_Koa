const route = require('koa-router'); //ทำการเรียก Router
const Router = new route()
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "thisshop"
});
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected! DB:thisshop");
//     var sql = "select * from products";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
//     con.end()
// });
con.beginTransaction(function (err) {
    if (err) { throw err; }
    con.query('INSERT INTO products SET product_name=?,product_price=?,product_qty=?', ['TestCar', 4000, 3], function (error, results, fields) {
        if (error) {
            return con.rollback(function () {
                throw error;
            });
        }
        console.log(results)
        con.commit(function (err) {
            if (err) {
                return con.rollback(function () {
                    throw err;
                });
            }
            console.log('Commited and Success!');
        });
    });
});
Router.get('/test', async ctx => {
    console.log('test path /test')
    ctx.body = "response from /test"
})
Router.post('/testPOST', async ctx => {
    let data = ctx.request.body
    console.log(data)
    ctx.body = data
})
module.exports = Router
