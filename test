module.exports = async (req, res) => {
  const fetch = require('node-fetch');
  
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=GOV';
  const apiKey = '01e0ee8f-b5bb-4ff8-8912-bc7e03b49dd8';

  try {
    const response = await fetch(url, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey
      }
    });
    
    const data = await response.json();
    
    res.status(200).send(data);
  } catch (error) {
    console.log('Error fetching data from CoinMarketCap:', error);
    res.status(500).send('Error fetching data from CoinMarketCap');
  }
};
