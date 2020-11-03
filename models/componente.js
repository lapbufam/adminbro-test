module.exports = (sequelize, DataTypes) => {
  const Componente = sequelize.define(
    'Componente',
    {
      nome: DataTypes.STRING,
    },
    {
      tableName: 'componente_class',
      timestamps: false,
    }
  );

  return Componente;
};
