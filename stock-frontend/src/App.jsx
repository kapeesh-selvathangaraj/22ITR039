import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StockPage from './components/StockPage';
import CorrelationHeatmap from './components/CorrelationHeatmap';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">Stock Price Aggregation</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Switch>
            <Route path="/" exact component={StockPage} />
            <Route path="/heatmap" component={CorrelationHeatmap} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
