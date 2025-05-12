const { fetchStockPrices } = require('../services/stockService');
const { calculateAverage, calculateCorrelation } = require('../utils/math');

async function getCorrelation(req, res) {
  const { minutes } = req.query;
  const tickers = req.query.ticker; // should be 2 tickers

  if (!Array.isArray(tickers) || tickers.length !== 2) {
    return res.status(400).json({ error: 'Exactly two tickers required' });
  }

  try {
    const [stock1, stock2] = await Promise.all([
      fetchStockPrices(tickers[0], Number(minutes)),
      fetchStockPrices(tickers[1], Number(minutes)),
    ]);

    const correlation = calculateCorrelation(stock1, stock2);
    res.json({
      correlation,
      stocks: {
        [tickers[0]]: { averagePrice: calculateAverage(stock1), priceHistory: stock1 },
        [tickers[1]]: { averagePrice: calculateAverage(stock2), priceHistory: stock2 },
      },
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to calculate correlation' });
  }
}

module.exports = { getCorrelation };
