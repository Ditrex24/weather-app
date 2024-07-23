const express = require('express');
const cors = require('cors'); // Importar cors
const app = express();
const bodyParser = require('body-parser');
const weatherRoutes = require('./routes/weatherRoutes');

// Middleware
app.use(cors()); // Habilitar CORS
app.use(bodyParser.json());

// Rutas
app.use('/api/weather', weatherRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
