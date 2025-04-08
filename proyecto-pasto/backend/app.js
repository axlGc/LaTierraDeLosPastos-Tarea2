const express = require('express');
require('dotenv').config(); // asegúrate de que esté aquí
const db = require('./db');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend activo 🎉');
});

app.listen(3000, () => {
  console.log('Servidor backend escuchando en el puerto 3000');
});