const weatherModel = require('../models/weatherModel');

const getWeather = async (req, res) => {
    try {
        const weatherData = await weatherModel.getWeatherData();
        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addWeather = async (req, res) => {
    const { city, temperature, description } = req.body;
    try {
        const newWeatherData = await weatherModel.addWeatherData(city, temperature, description);
        res.status(201).json(newWeatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getWeather,
    addWeather,
};
