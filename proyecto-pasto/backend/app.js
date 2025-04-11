const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Cambia esto si tu MySQL tiene contraseña
  database: 'databasepasto'
});

// Verifica conexión
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor backend del Carnaval está funcionando');
});

// Ruta de login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Datos recibidos:', req.body);

  if (!email || !password) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }

    if (results.length > 0) {
      const user = results[0];
      res.json({
        nombre: user.nombre,
        rol: user.rol
      });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  });
});
app.use('/api', authRoutes);
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
