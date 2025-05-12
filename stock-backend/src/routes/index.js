// routes/index.js

const express = require('express');
const { getAveragePrice } = require('../controllers/averageController');
const { getCorrelation } = require('../controllers/correlationController');
const { getTickers } = require('../controllers/tickerController');

const router = express.Router();

// Route to get average stock price for a specific ticker
router.get('/stocks/:ticker', getAveragePrice);

// Route to get Pearson correlation between two tickers
router.get('/stockcorrelation', getCorrelation);

// Route to fetch list of valid tickers from the test server
router.get('/tickers', getTickers);

module.exports = router;
