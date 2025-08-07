const express = require("express");
const router = express.Router();
const db = require("../db");
const { Anomaly } = require("../models");
const AnomalyDTO = require("./dto/anomalies.dto");

// GET /anomalies
router.get("/", async (req, res) => {
  try {
    console.log("Fetching anomalies from the database...");
    const result = await db.query("SELECT * FROM anomalies");
    // Map each row to a DTO
    const anomalies = result.rows.map((row) => new AnomalyDTO(row));
    res.json(anomalies);
  } catch (err) {
    console.error("Error fetching anomalies:", err);
    res.status(500).send("Internal Server Error");
  }
});

// POST /anomalies

router.post("/", async (req, res) => {
  try {
    const anomalyData = req.body;

    const createdAnomaly = await Anomaly.create(anomalyData);

    const anomalyDTO = new AnomalyDTO(createdAnomaly);

    console.log("Anomaly created:", createdAnomaly.id);
    res.status(201).json(anomalyDTO);
  } catch (error) {
    console.error("Error creating anomaly:", error);
    res.status(400).json({
      error: "Invalid data provided",
      message: error.message,
    });
  }
});

// PUT /anomalies/:id

router.put("/:id", async (req, res) => {
  const { name } = req.params;
  const anomalyData = req.body;

  try {
    const anomaly = await Anomaly.findOne(name);
    if (!anomaly) {
      return res.status(404).json({ error: "Anomaly not found" });
    }

    await anomaly.update(anomalyData);
    const updatedAnomalyDTO = new AnomalyDTO(anomaly);

    res.json(updatedAnomalyDTO);
  } catch (error) {
    console.error("Error updating anomaly:", error);
    res.status(400).json({
      error: "Invalid data provided",
      message: error.message,
    });
  }
});

// DELETE /anomalies/:id

router.delete("/:id", async (req, res) => {
  const { name } = req.params;

  try {
    const anomaly = await Anomaly.findOne(name);
    if (!anomaly) {
      return res.status(404).json({ error: "Anomaly not found" });
    }

    await anomaly.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting anomaly:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

module.exports = router;
