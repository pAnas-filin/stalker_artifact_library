module.exports = (sequelize, DataTypes) => {
  const AnomalyStory = sequelize.define(
    "anomalyStory",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      anomalyId: {
        type: DataTypes.INTEGER,
        references: {
          model: "anomalies",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      story: { type: DataTypes.TEXT, allowNull: false },
      source: { type: DataTypes.STRING },
      type: { type: DataTypes.ENUM("Myth", "Report", "Memo", "Rumor") },
      importance: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      timestamps: true,
    }
  );

  return AnomalyStory;
};
