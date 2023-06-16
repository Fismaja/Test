// This is the content of the proxy.js file
module.exports = async (req, res) => {
    const fetch = require('node-fetch');

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

    const apiKey = '01e0ee8f-b5bb-4ff8-8912-bc7e03b49dd8';
    const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=GOV';

    const response = await fetch(apiUrl, {
        headers: {
            'X-CMC_PRO_API_KEY': apiKey
        }
    });

    const data = await response.json();

    res.status(200).send(data);
};
