const { fetchStockPrices } = require('../services/stockService');
const { calculateAverage } = require('../utils/math');

async function getAveragePrice(req, res) {
  const { ticker } = req.params;
  const minutes = parseInt(req.query.minutes);

  try {
    const prices = await fetchStockPrices(ticker, minutes);
    const avg = calculateAverage(prices);
    res.json({ averageStockPrice: avg, priceHistory: prices });
  } catch (err) {    
    console.error("ERROR:", err?.response?.data || err.message); // <-- LOGGING
    res.status(500).json({ error: 'Failed to fetch stock prices' });
  }
}

module.exports = { getAveragePrice };
