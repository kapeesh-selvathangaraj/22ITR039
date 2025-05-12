const axios = require('axios');

let cachedToken = null;

async function getToken() {
  if (cachedToken) return cachedToken;

  const { data } = await axios.post('http://20.244.56.144/evaluation-service/auth', {
    email: process.env.EMAIL,
    name: process.env.NAME,
    rollNo: process.env.ROLL_NO,
    accessCode: process.env.ACCESS_CODE,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  cachedToken = data.access_token;
  return cachedToken;
}

module.exports = { getToken };
