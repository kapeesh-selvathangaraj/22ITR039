function calculateAverage(prices) {
    const total = prices.reduce((sum, p) => sum + p.price, 0);
    return total / prices.length;
  }
  
  function calculateCorrelation(prices1, prices2) {
    const n = Math.min(prices1.length, prices2.length);
    const x = prices1.slice(0, n).map(p => p.price);
    const y = prices2.slice(0, n).map(p => p.price);
  
    const avgX = calculateAverage(prices1);
    const avgY = calculateAverage(prices2);
  
    let numerator = 0;
    let denomX = 0;
    let denomY = 0;
  
    for (let i = 0; i < n; i++) {
      const dx = x[i] - avgX;
      const dy = y[i] - avgY;
      numerator += dx * dy;
      denomX += dx ** 2;
      denomY += dy ** 2;
    }
  
    return numerator / Math.sqrt(denomX * denomY);
  }
  
  module.exports = { calculateAverage, calculateCorrelation };
  