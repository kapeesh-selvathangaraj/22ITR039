import React, { useState, useEffect } from 'react';
import { fetchCorrelation } from '../services/StockApi';
import { Grid, Typography } from '@mui/material';
import { HeatMap } from 'react-heatmap-grid';

const CorrelationHeatmap = () => {
  const [minutes, setMinutes] = useState(30);
  const [tickers] = useState(['AAPL', 'AMZN', 'NVDA', 'PYPL', 'GOOGL']);
  const [correlationData, setCorrelationData] = useState(null);

  useEffect(() => {
    const getCorrelationData = async () => {
      try {
        const result = await fetchCorrelation(minutes, tickers);
        setCorrelationData(result);
      } catch (error) {
        console.error('Error fetching correlation data:', error);
      }
    };
    getCorrelationData();
  }, [minutes]);

  return (
    <div>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h4">Correlation Heatmap</Typography>
        </Grid>
        <Grid item>
          <HeatMap
            xLabels={tickers}
            yLabels={tickers}
            data={correlationData ? correlationData.correlationMatrix : []}
            square={true}
            cellHeight={30}
            cellWidth={30}
            xLabelsLocation={"bottom"}
            yLabelsLocation={"left"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CorrelationHeatmap;
