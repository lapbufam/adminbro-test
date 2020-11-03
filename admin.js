const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');

AdminBro.registerAdapter(AdminBroSequelize);

const express = require('express');
const app = express();

const db = require('./models');
const sequelize = require('./database/connect');
const FontePagadora = db['FontePagadora'];

const run = async () => {
  const adminBro = new AdminBro({
    databases: [db],
    resources: [FontePagadora],
    rootPath: '/admin',
  });

  const router = AdminBroExpress.buildRouter(adminBro);

  app.use(adminBro.options.rootPath, router);
  app.listen(5050, () => console.log('Admin server at port 5050.'));
};

run();
