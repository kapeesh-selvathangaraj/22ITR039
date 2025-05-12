const axios = require('axios');
const { getToken } = require('../config/auth');

async function fetchStockPrices(ticker, minutes) {
  try {
    const token = await getToken();
    const url = `http://20.244.56.144/evaluation-service/stocks/${ticker}?minutes=${minutes}`;
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.error("Stock service error:", err?.response?.data || err.message);
    throw err;
  }
}


module.exports = { fetchStockPrices };
