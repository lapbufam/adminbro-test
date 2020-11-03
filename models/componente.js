module.exports = (sequelize, DataTypes) => {
  const Componente = sequelize.define(
    'Componente',
    {
      nome: DataTypes.STRING 
    },
    {
      tableName: 'componente_class',
      timestamps: false,
    }
  );

  Componente.associate = function (models) {
    Componente.hasMany(models.SubComponente, {
      foreignKey: 'componente_id',
    });
  };

  return Componente;
};
