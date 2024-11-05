const axios = require('axios');

// Function to fetch cryptocurrencies and their prices
const fetchCryptocurrencies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.coinpaprika.com/v1/coins',
  };

  try {
    const response = await axios.request(options);
    const coins = response.data.slice(0, 10); // Get top 10 cryptocurrencies

    // Fetching current price for each cryptocurrency
    for (const coin of coins) {
      const priceResponse = await axios.get(`https://api.coinpaprika.com/v1/tickers/${coin.id}`);
      const currentPrice = priceResponse.data.quotes.USD.price;
      const historicalPrice = priceResponse.data.quotes.USD.percent_change_24h;

      // Calculate profit/loss percentage
      const profitLossPercentage = historicalPrice; // Assuming percent_change_24h gives the change
      const profitLoss = ((currentPrice * profitLossPercentage) / 100).toFixed(2); // Calculation based on percentage change

      console.log(`Name: ${coin.name} (${coin.symbol})`);
      console.log(`Current Price: $${currentPrice.toFixed(2)}`);
      console.log(`Profit/Loss (24h): $${profitLoss} (${profitLossPercentage.toFixed(2)}%)`);
      console.log('----------------------------------');
    }
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
  }
};

// Execute the function to fetch and display cryptocurrencies
fetchCryptocurrencies();
