// apiKey = "37e5d4efe08f1f042d1a9394e88c0c7f";

const axios = require("axios");

const fetchData = async () => {
  const apiKey = "37e5d4efe08f1f042d1a9394e88c0c7f";
  const seriesId = "AAPL";
  const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${apiKey}&file_type=json`;

  try {
    const response = await axios.get(url);
    const data = response.data.observations;
    console.log("GDP Data:");
    data.forEach((obs) => {
      console.log(`Date: ${obs.date}, Value: ${obs.value}`);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
