const pool = require('../databse');

const getWeatherData = async () => {
    const query = 'SELECT * FROM weather_data';
    const { rows } = await pool.query(query);
    return rows;
};

const addWeatherData = async (city, temperature, description) => {
    const query = 'INSERT INTO weather_data (city, temperature, description) VALUES ($1, $2, $3) RETURNING *';
    const values = [city, temperature, description];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

module.exports = {
    getWeatherData,
    addWeatherData,
};
