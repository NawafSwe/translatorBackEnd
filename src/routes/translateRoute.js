/* ----------------------------- importing packages ----------------------------- */
const express = require("express");
const translateRouter = express.Router();
const translateController = require("../controllers/translateController");

/* ----------------------------- Translate Routes ----------------------------- */

translateRouter.get("/", async (req, res) => {
  res.json("works").status(200);
});
translateRouter.post("/", async (req, res) => {
  const response = await translateController(req.body);
  res.json(response).status(200);
});

module.exports = translateRouter;
