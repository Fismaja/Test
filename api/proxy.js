const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const response = await fetch(
      "https://api.binance.com/api/v3/ticker/price?symbol=GOVUSDT"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from Binance");
    }

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
