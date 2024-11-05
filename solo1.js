const axios = require('axios');

const API_KEY = 'UA7EKS78XX3EDNVC';
const symbol = 'IBM';
const interval = '5min';

const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`;

axios.get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
