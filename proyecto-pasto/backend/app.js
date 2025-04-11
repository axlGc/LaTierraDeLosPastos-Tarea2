// backend/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Configurar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = require('./db');

// Rutas
const authRoutes = require('./routes/auth');
const rutasRoutes = require('./routes/rutas');
const eventosRoutes = require('./routes/eventos');
const toursRoutes = require('./routes/tours');

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/rutas', rutasRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/tours', toursRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('🌎 Backend de La Tierra de los Pastos funcionando');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
