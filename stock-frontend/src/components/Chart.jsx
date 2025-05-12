// components/StockChart.jsx
import {
    LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, ResponsiveContainer
  } from 'recharts';
  import { Typography } from '@mui/material';
  
  const StockChart = ({ data, avg }) => {
    if (!data || data.length === 0) {
      return <Typography>No data available</Typography>;
    }
  
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#1976d2" strokeWidth={2} />
          <ReferenceLine y={avg} label="Avg" stroke="red" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  export default StockChart;
  