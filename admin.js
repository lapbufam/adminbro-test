const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');

const express = require('express');
const app = express();

const adminBro = new AdminBro({
  databases: [],
  rootPath: '/admin',
});

const router = AdminBroExpress.buildRouter(adminBro);

app.use(adminBro.options.rootPath, router);
app.listen(5050, () => console.log('Admin server at port 5050.'));