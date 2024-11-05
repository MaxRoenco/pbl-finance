// const axios = require('axios');
// const fetchRealTimeData = async (ticker) => {
//     const options = {
//       method: 'GET',
//       url: `https://api.polygon.io/v1/last/stocks/${ticker}`,
//       params: { apiKey: '' }
//     };
  
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   // Example call
//   fetchRealTimeData('AAPL');
  
//   const axios = require('axios');

// const fetchTickerDetails = async (ticker) => {
//   const options = {
//     method: 'GET',
//     url: `https://api.polygon.io/v3/reference/tickers/${ticker}`,
//     params: { apiKey: '' } // Replace with your Polygon.io API key
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     console.log(response.data[price])
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Example call
// fetchTickerDetails('AAPL');



const axios = require('axios');

const getStockPrice = async (ticker) => {
  const options = {
    method: 'GET',
    url: `https://api.polygon.io/v2/last/trade/${ticker}`,
    params: { apiKey: 'oLGiQ7IEdPESk_A4AnuBkqibEbW2lNmr' } // Replace with your actual API key
  };

  try {
    const response = await axios.request(options);
    const price = response.data.results.price; // Latest price
    console.log(`The latest price for ${ticker} is $${price}`);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

// Example call
getStockPrice('AAPL');
