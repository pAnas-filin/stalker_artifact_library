const { all } = require("../routes/anomalies");

module.exports = (sequelize, DataTypes) => {
  const Anomaly = sequelize.define(
    "Anomaly",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: DataTypes.STRING,
      walkthrough: DataTypes.TEXT,
      artifacts: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
        allowNull: true,
      },
      gallery: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "anomalies",
    }
  );

  return Anomaly;
};
