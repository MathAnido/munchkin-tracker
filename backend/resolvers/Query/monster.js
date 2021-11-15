const axios = require('axios');

module.exports = {
  async monsters() {
    const { data } = await axios.get(`${process.env.APP_DB_HOST}/monsters.json`);
    console.log(data)
    return data
  },
};
