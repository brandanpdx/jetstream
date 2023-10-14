require("dotenv").config();
const pool = require("./../database");
const express = require("express");
const queries = require("./queries");
const app = express();

const getPilots = (req, res) => {
  pool.query(queries.getPilots, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const getPilotById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getPilotById, [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const addPilot = (req, res) => {
  const { first_name, last_name, email, phone } = req.body;

  pool.query(queries.checkEmailExists, [email], (err, results) => {
    if (results.rows.length) {
      res.send("Email already exists.");
    }

    pool.query(
      queries.addPilot,
      [first_name, last_name, email, phone],
      (err, results) => {
        if (err) {
          throw err;
        }
        res.status(201).send("Pilot added successfully.");
      }
    );
  });
};

const deletePilot = (req, res) => {
  const { email } = req.params;

  console.log("Email received:", email);

  pool.query(queries.checkEmailExists, [email], (err, results) => {
    console.log("Query results:", results.rows);

    if (!results.rows.length) {
      console.log("Email does not exist");
      res.send("Email does not exist");
    } else {
      pool.query(queries.deletePilot, [email], (err, results) => {
        if (err) {
          console.error("Error deleting pilot:", err);
          throw err;
        } else {
          console.log("Pilot deleted successfully");
          res.status(201).send("Pilot deleted successfully.");
        }
      });
    }
  });
};

module.exports = {
  getPilots,
  getPilotById,
  addPilot,
  deletePilot,
};
