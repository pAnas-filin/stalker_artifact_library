const { Sequelize } = require("sequelize");
const config = require("../configs/config").development;

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  logging: config.logging,
});

sequelize
  .authenticate()
  .then(() => console.log("✅ Sequelize connected"))
  .catch((err) => console.error("❌ Sequelize connection error:", err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models and connect them to the sequelize instance
db.Anomaly = require("./anomaly")(sequelize, Sequelize);
db.AnomalyStory = require("./anomalyStory")(sequelize, Sequelize);
module.exports = db;
