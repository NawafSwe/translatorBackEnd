const prepareRequest = async (body) => {
  try {
    const hostUrl = `https://google-translate1.p.rapidapi.com/language/translate/v2`;
    const API_KEY = process.env.API_KEY;
    const axiosObject = {};
    axiosObject.options = {
      headers: {
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": `${API_KEY}`,
        "accept-encoding": "application/gzip",
        "content-type": "application/x-www-form-urlencoded",
        useQueryString: true,
      },
    };
    axiosObject.config = {
      method: "POST",
      url: hostUrl,
    };
    axiosObject.data = {
      source: body.source,
      q: body.q,
      target: body.target,
    };

    return axiosObject;
  } catch (error) {
    console.log(`error happened while preparing the request ${error.message}`);
  }
};

module.exports = prepareRequest;
