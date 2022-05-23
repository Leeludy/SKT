const express = require("express");
const router = express.Router();

//Use express.json middleware
router.use(express.json());

// Load mariadb pool
const pool = require("../db/skt_db");

// Format date utc
const { formatDate } = require("../db/tools");

// Endpoint sending actives threshold Notifications '/notifications/alertsThr'
router.get("/alertsThr", async (req, res) => {
  try {
    const conn = await pool.getConnection();

    const queryCountEquipment =
      "SELECT equipment.model_categorie, count(equipment.ean13) as numberOfEquipment, thresholds.threshold_level as threshold_level  FROM equipment INNER JOIN thresholds ON equipment.model_categorie=thresholds.ref_equipment GROUP BY equipment.model_categorie ;";

    const countModelOfEquipment = await conn.query(queryCountEquipment);
    conn.end();
    conn.release();

    res.status(200).json(
      countModelOfEquipment
        // transform bigInt in number for json compatibility
        .map(({ numberOfEquipment, ...data }) => ({
          ...data,
          numberOfEquipment: Number(numberOfEquipment),
        }))
        .filter(
          ({ threshold_level, numberOfEquipment }) =>
            numberOfEquipment <= threshold_level
        )
    );
  } catch (err) {
    console.log(err);
  }
});

// Router params for threshold id
router.param("id", (req, res, next, id) => {
  req.threshold = id;
  next();
});

module.exports = router;
