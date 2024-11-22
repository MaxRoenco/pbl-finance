// const axios = require('axios');

// // Function to fetch cryptocurrencies and their prices
// const fetchCryptocurrencies = async () => {
//   const options = {
//     method: 'GET',
//     url: 'https://api.coinpaprika.com/v1/coins',
//   };

//   try {
//     const response = await axios.request(options);
//     const coins = response.data.slice(0, 10); // Get top 10 cryptocurrencies

//     // Fetching current price for each cryptocurrency
//     for (const coin of coins) {
//       const priceResponse = await axios.get(`https://api.coinpaprika.com/v1/tickers/${coin.id}`);
//       const currentPrice = priceResponse.data.quotes.USD.price;
//       const historicalPrice = priceResponse.data.quotes.USD.percent_change_24h;

//       // Calculate profit/loss percentage
//       const profitLossPercentage = historicalPrice; // Assuming percent_change_24h gives the change
//       const profitLoss = ((currentPrice * profitLossPercentage) / 100).toFixed(2); // Calculation based on percentage change

//       console.log(`Name: ${coin.name} (${coin.symbol})`);
//       console.log(`Current Price: $${currentPrice.toFixed(2)}`);
//       console.log(`Profit/Loss (24h): $${profitLoss} (${profitLossPercentage.toFixed(2)}%)`);
//       console.log('----------------------------------');
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error.response ? error.response.data : error.message);
//   }
// };

// // Execute the function to fetch and display cryptocurrencies
// fetchCryptocurrencies();

const axios = require("axios");

// Function to fetch cryptocurrencies and their prices
const fetchCryptocurrencies = async () => {
  const baseUrl = "https://api.coinpaprika.com/v1";

  try {
    // Fetch top 10 cryptocurrencies
    const response = await axios.get(`${baseUrl}/coins`);
    const coins = response.data.slice(0, 10);

    for (const coin of coins) {
      // Fetch current price
      const priceResponse = await axios.get(`${baseUrl}/tickers/${coin.id}`);
      const currentPrice = priceResponse.data.quotes.USD.price;

      // Helper function to calculate profit/loss
      const calculateProfitLoss = async (days) => {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - days);

        const start = startDate.toISOString().split("T")[0];
        const end = endDate.toISOString().split("T")[0];

        try {
          const historicalResponse = await axios.get(
            `${baseUrl}/tickers/${coin.id}/historical`,
            {
              params: {
                start: start,
                end: end,
                interval: "1d",
              },
            }
          );

          const historicalData = historicalResponse.data;

          // Use the first price in the historical data as the base price
          if (historicalData.length > 0) {
            const historicalPrice = historicalData[0].price;
            const profitLoss =
              ((currentPrice - historicalPrice) / historicalPrice) * 100;
            return profitLoss.toFixed(2);
          }
        } catch (error) {
          console.error(
            `Error fetching historical data for ${days} days:`,
            error.message
          );
          return "N/A";
        }
      };

      // Calculate profit/loss for different periods
      const profitLoss24h =
        priceResponse.data.quotes.USD.percent_change_24h.toFixed(2); // Already provided by the API
      const profitLoss7d = await calculateProfitLoss(7);
      const profitLoss1m = await calculateProfitLoss(30);
      const profitLoss1y = await calculateProfitLoss(365);

      // Display results
      console.log(`Name: ${coin.name} (${coin.symbol})`);
      console.log(`Current Price: $${currentPrice.toFixed(2)}`);
      console.log(`Profit/Loss (24h): ${profitLoss24h}%`);
      console.log(`Profit/Loss (7d): ${profitLoss7d}%`);
      console.log(`Profit/Loss (1month): ${profitLoss1m}%`);
      console.log(`Profit/Loss (1year): ${profitLoss1y}%`);
      console.log("----------------------------------");
    }
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};

// Execute the function to fetch and display cryptocurrencies
fetchCryptocurrencies();
