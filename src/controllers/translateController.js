const unirest = require("unirest");
const prepareRequest = require("./prepareRequest");

const translateController = async (body) => {
  let translations = [];
  try {
    const request = await prepareRequest(body);
    //configuring the request
    const req = unirest(request.config.method, request.config.url);
    req.headers(request.headers);
    req.form(request.data);

    //starting the request
    const response = await req.end(async (res) => {
      if (res.error) console.log(`error happens while unirest performing`);
      console.log(await res.body.data.translations);
      translations.push(...(await res.body.data.translations));
      return translations;
    });

    return translations;
  } catch (error) {
    console.log(
      `error happen in the controller while performing unirest request ${error.message}`
    );
  }
};

module.exports = translateController;
