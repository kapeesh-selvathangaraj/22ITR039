import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchStockPrices = async (ticker, minutes) => {
  try {
    const response = await axios.get(`${API_URL}/stocks/${ticker}?minutes=${minutes}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock prices:', error);
    throw error;
  }
};

export const fetchCorrelation = async (minutes, tickers) => {
  try {
    const response = await axios.get(`${API_URL}/stockcorrelation?minutes=${minutes}&ticker=${tickers.join('&ticker=')}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching correlation:', error);
    throw error;
  }
};
