const axios = require('axios');
const { getToken } = require('../config/auth');

exports.getTickers = async (req, res) => {
  try {
    const token = await getToken();
    const response = await axios.get('http://20.244.56.144/evaluation-service/stocks', {
      headers: { Authorization: `Bearer ${token}` }
    });
    res.json(response.data);
  } catch (err) {
    console.error("Failed to fetch tickers:", err?.response?.data || err.message);
    res.status(500).json({ error: 'Could not fetch tickers' });
  }
};
