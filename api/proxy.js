const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=27016", {
      headers: {
        'X-CMC_PRO_API_KEY': '01e0ee8f-b5bb-4ff8-8912-bc7e03b49dd8'
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from CoinMarketCap");
    }

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
