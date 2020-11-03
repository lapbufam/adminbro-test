const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');

AdminBro.registerAdapter(AdminBroSequelize);

const express = require('express');
const app = express();

const db = require('./models');

const FontePagadora = db['FontePagadora'];
const Componente = db['Componente'];

const run = async () => {
  const adminBro = new AdminBro({
    branding: {
      companyName: 'SGI',
      softwareBrothers: false,
      logo: "https://idesam.org/wp-content/uploads/2018/01/Logo_FAS_2015_white.png",
      favicon:
        'https://fas-amazonas.org/novosite/wp-content/themes/fas-amazonas-theme/img/logo-fas.png',
    },
    databases: [db],
    resources: [
      {
        resource: FontePagadora,
        options: {
          id: 'fonte_pagadora',
          actions: {
            bulkDelete: {
              isVisible: false,
            },
          },
          showFilter: false,
        },
      },
      {
        resource: Componente,
        options: {
          id: '_componente',
          actions: {
            bulkDelete: {
              isVisible: false,
            },
          },
          showFilter: false,
        },
      },
    ],
    rootPath: '/admin',
    locale: {
      language: 'pt',
      translations: {
        actions: {
          new: 'Novo',
          edit: 'Editar',
          show: 'Mais detalhes',
          delete: 'Excluir',
          list: 'Listagem',
        },
        buttons: {
          save: 'Salvar',
          filter: 'Filtrar',
          applyChanges: 'Aplicar mudanças',
          Reset: 'Limpar',
        },
        labels: {
          "fonte_pagadora": 'Fonte Pagadora',
          "_componente": 'Componentes',
          filters: 'Filtros',
        },
        resources: {
          fonte_pagadora: {
            actions: {
              new: 'Nova',
              list: 'Fontes Pagadoras',
            },
          },
          _componente: {
            actions: {
              new: 'Novo',
              list: 'Componentes',
            },
          },
        },
      },
    },
  });

  const router = AdminBroExpress.buildRouter(adminBro);

  app.use(adminBro.options.rootPath, router);
  app.listen(5050, () => console.log('Admin server at port 5050.'));
};

run();
