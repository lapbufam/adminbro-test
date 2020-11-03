module.exports = (sequelize, DataTypes) => {
  const FontePagadora = sequelize.define(
    'FontePagadora',
    {
      nome: DataTypes.STRING,
    },
    {
      tableName: 'fonte_pagadora',
      timestamps: false,
    }
  );

  return FontePagadora;
};
