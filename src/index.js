// var unirest = require("unirest");
// var axios = require('axios');
// //convert it to axios
// var req = unirest(
//   "POST",
//   "https://google-translate1.p.rapidapi.com/language/translate/v2"
// );

// req.headers({
//   "x-rapidapi-host": "google-translate1.p.rapidapi.com",
//   "x-rapidapi-key": "b0aa080e42mshef526e52a9e4f17p19e78djsn974420e17a19",
//   "accept-encoding": "application/gzip",
//   "content-type": "application/x-www-form-urlencoded",
//   useQueryString: true,
// });

// req.form({
//   source: "en",
//   q: "how are you to day ? ",
//   target: "ar",
// });

// req.end(function (res) {
//   if (res.error) throw new Error(res.error);

//   console.log(res.body.data.translations);
// });

/* ----------------------------- importing packages ----------------------------- */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

/* ----------------------------- App Configuration ----------------------------- */
const app = express();
app.use(cors());
app.use(bodyParser.json());

/* ----------------------------- App Routes ----------------------------- */

app.get("/", async (req, res) => {
  res.send("I am fine bro ").status(200);
});

/* ----------------------------- App Listener ----------------------------- */

const PORT = 8000;
const HOST = "localhost";

app.listen(PORT,HOST);
console.log(`server running on http://${HOST}:${PORT}`);
