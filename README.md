# TheBros

BD

-- Tabla: Categoría
CREATE TABLE Categoria (
    id_categoria SERIAL PRIMARY KEY,  -- SERIAL en PostgreSQL se utiliza para auto-incrementar
    nombre_categoria VARCHAR(50) NOT NULL
);

-- Tabla: Producto
CREATE TABLE Producto (
    id_producto SERIAL PRIMARY KEY,  -- SERIAL en PostgreSQL para auto-incrementar
    nombre_producto VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion TEXT,
    imagen VARCHAR(255),
    disponibilidad BOOLEAN DEFAULT TRUE,
    id_categoria INT,
    CONSTRAINT fk_categoria
      FOREIGN KEY (id_categoria)
      REFERENCES Categoria(id_categoria)
);
