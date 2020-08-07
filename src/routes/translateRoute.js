/* ----------------------------- importing packages ----------------------------- */
const express = require("express");
const translateRouter = express.Router();
const prepareRequest = require("../controllers/prepareRequest");
const unirest = require("unirest");

/* ----------------------------- Translate Routes ----------------------------- */

translateRouter.get("/", async (req, res) => {
  res.json("works").status(200);
});

//route
translateRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const request = await prepareRequest(body);
    //configuring the request
    const unirest_req = unirest(request.config.method, request.config.url);
    unirest_req.headers(request.headers);
    unirest_req.form(request.data);

    //starting the request
    await unirest_req.end(async (response) => {
      if (res.error) {
        console.log(`error happens while unirest performing`);
        res.send("no result").status(400);
      } else {
        res.json(await response.body.data.translations).status(200);
      }
    });
  } catch (error) {
    console.log(
      `error happen in the controller while performing unirest request ${error.message}`
    );
  }
});

module.exports = translateRouter;
