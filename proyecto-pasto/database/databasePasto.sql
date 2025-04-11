
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  contrasena VARCHAR(255) NOT NULL,
  rol ENUM('admin', 'guia') NOT NULL
);


CREATE TABLE rutas_turisticas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  duracion VARCHAR(20),
  fecha DATE,
  guia_id INT,
  FOREIGN KEY (guia_id) REFERENCES usuarios(id) ON DELETE SET NULL
);


CREATE TABLE lugares_interes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  ubicacion VARCHAR(100),
  ruta_id INT,
  FOREIGN KEY (ruta_id) REFERENCES rutas_turisticas(id) ON DELETE CASCADE
);


CREATE TABLE eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descripcion TEXT,
  fecha DATE,
  ubicacion VARCHAR(100)
);


CREATE TABLE tours (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2),
  fecha DATE,
  guia_id INT,
  FOREIGN KEY (guia_id) REFERENCES usuarios(id) ON DELETE SET NULL
);


CREATE TABLE restaurantes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  tipo_comida VARCHAR(50),
  ubicacion VARCHAR(100),
  descripcion TEXT
);


CREATE TABLE alojamientos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  tipo VARCHAR(50),  -- hotel, hostal, etc.
  ubicacion VARCHAR(100),
  descripcion TEXT
);
