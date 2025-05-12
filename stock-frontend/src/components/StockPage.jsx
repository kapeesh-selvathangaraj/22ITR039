import React, { useState, useEffect } from 'react';
import { fetchStockPrices } from '../services/StockApi';
import { Line } from 'react-chartjs-2';
import { Button, TextField, Grid, Typography } from '@mui/material';
import Chart from 'chart.js/auto';

const StockPage = () => {
  const [ticker, setTicker] = useState('AAPL');
  const [minutes, setMinutes] = useState(30);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchStockPrices(ticker, minutes);
        setData(result);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
    getData();
  }, [ticker, minutes]);

  const chartData = data && {
    labels: data.priceHistory.map((item) => new Date(item.lastUpdatedAt).toLocaleTimeString()),
    datasets: [
      {
        label: 'Stock Price',
        data: data.priceHistory.map((item) => item.price),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Average Price',
        data: new Array(data.priceHistory.length).fill(data.averageStockPrice),
        borderColor: 'red',
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  return (
    <div>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h4">Stock Price for {ticker}</Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Stock Ticker"
            variant="outlined"
            value={ticker}
            onChange={(e) => setTicker(e.target.value.toUpperCase())}
          />
          <TextField
            label="Time (minutes)"
            variant="outlined"
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setMinutes(minutes)}>Update</Button>
        </Grid>
        <Grid item>
          {data && chartData && <Line data={chartData} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default StockPage;
