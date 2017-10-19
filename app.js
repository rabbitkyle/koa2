const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

// const router = require('koa-router')();

const app = new  Koa();

app.use(bodyParser());

const controller = require('./controller');

app.use(controller('routerFile'));



app.listen(3000);

console.log('app start at port 3000')