const axios = require('axios');

// Your Finnhub API Key
const FINNHUB_API_KEY = 'cslpf79r01qgp6njjucgcslpf79r01qgp6njjud0'; // Replace with your Finnhub API key

// List of stock symbols you want to track
const stockSymbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'FB', 'TSLA', 'NFLX', 'NVDA', 'JPM', 'V'];

const fetchStockData = async () => {
  console.log('Fetching real-time stock prices...\n');
  console.log('Symbol\tCurrent Price\t\t24h Change\t\tProfit/Loss\n');

  for (const symbol of stockSymbols) {
    try {
      // Fetch current price
      const response = await axios.get(`https://finnhub.io/api/v1/quote`, {
        params: {
          symbol: symbol,
          token: FINNHUB_API_KEY
        }
      });

      // Extract relevant data
      const { c: currentPrice, pc: previousClose } = response.data;
      
      // Calculate 24-hour profit/loss percentage and amount
      const profitLossPercentage = ((currentPrice - previousClose) / previousClose) * 100;
      const profitLossAmount = currentPrice - previousClose;

      console.log(`${symbol}\t$${currentPrice.toFixed(2)}\t\t${profitLossPercentage.toFixed(2)}%\t\t$${profitLossAmount.toFixed(2)}`);
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:`, error.response ? error.response.data : error.message);
    }
  }
};

// Run the function to display stock prices
fetchStockData();
