const axios = require('axios');

const fetchFearGreedIndex = async () => {
  const options = {
    method: 'GET',
    url: 'https://crypto-fear-greed-index2.p.rapidapi.com/index',
    params: {
      limit: '10',
      timestamp: '1518048000'
    },
    headers: {
      'x-rapidapi-key': 'cfc4ec6f9bmsh5875edf65f903b7p17871fjsn36243be4a36a',
      'x-rapidapi-host': 'crypto-fear-greed-index2.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

// Call the function
fetchFearGreedIndex();
