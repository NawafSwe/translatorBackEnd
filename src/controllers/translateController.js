const axios = require("axios");
const prepareRequest = require("./prepareRequest");

const translateController = async (body) => {
  try {
    const request = await prepareRequest(body);
    console.log("request data is : ", request.data);
    const response = await axios({
      method: request.config.method,
      url: request.config.url,
      headers: request.options,
      data: request.data,
    });

    const result = await response.data;
    return result;
  } catch (error) {
    console.log(
      `error happen in the controller while performing axios request ${error.message}`
    );
  }
};

module.exports = translateController;
