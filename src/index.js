/* ----------------------------- importing packages ----------------------------- */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const translateRouter = require("./routes/translateRoute");

/* -------------- choosing Env ---------------------- */
if (
  process.env.NODE_ENV === "staging" ||
  process.env.NODE_ENV === "production"
) {
  require("custom-env").env(process.env.NODE_ENV);
} else {
  require("dotenv").config();
}

/* ----------------------------- App Configuration ----------------------------- */
const app = express();
app.use(cors());
app.use(expressValidator());
app.use(bodyParser.json());

/* ----------------------------- App Routes ----------------------------- */

app.get("/", async (req, res) => {
  res.send("I am fine bro ").status(200);
});
app.use("/translators", translateRouter);

/* ----------------------------- App Listener ----------------------------- */

const PORT = 8000;
const HOST = "localhost";

app.listen(PORT, HOST);
console.log(`server running on http://${HOST}:${PORT}`);
