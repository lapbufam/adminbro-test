module.exports = (sequelize, DataTypes) => {
  const SubComponente = sequelize.define(
    'SubComponente',
    {
      nome: DataTypes.STRING,
    },
    {
      tableName: 'sub_componente',
      timestamps: false,
    }
  );

  SubComponente.associate = function(models) {
    // associations can be defined here
    SubComponente.belongsTo(models.Componente, {
      foreignKey: 'componente_id',
    })
  };

  return SubComponente;
};
