// const axios = require('axios');

// const API_KEY = 'UA7EKS78XX3EDNVC';
// const symbol = 'AAPL';
// const interval = '5min';

// const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`;

// axios.get(url)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


const axios = require('axios');

const API_KEY =  "UA7EKS78XX3EDNVC";

const readline = require('readline');

// Set up readline for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get open price for a specific stock symbol and date
function getOpenPrice(symbol, targetDate) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;

  axios.get(url)
    .then(response => {
      const data = response.data;
      
      if (data['Time Series (Daily)']) {
        const dailyData = data['Time Series (Daily)'][targetDate];
        if (dailyData) {
          const openPrice = dailyData['1. open'];
          console.log(`Open price for ${symbol} on ${targetDate}: $${openPrice}`);
        } else {
          console.log(`No data available for ${symbol} on ${targetDate}.`);
        }
      } else if (data['Note']) {
        console.log("API limit reached:", data['Note']);
      } else if (data['Error Message']) {
        console.log("Error:", data['Error Message']);
      } else {
        console.log("Unexpected API response structure.");
      }
    })
    .catch(error => {
      console.error('Request failed:', error);
    });
}

// Prompt user for ticker symbol and date
rl.question('Enter the stock ticker symbol (e.g., IBM): ', (symbol) => {
  rl.question('Enter the date (YYYY-MM-DD): ', (date) => {
    getOpenPrice(symbol, date);
    rl.close();
  });
});