import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM Producto ORDER BY id_producto ASC");
    return rows;
};

const createProduct = async (nombre_producto, precio, descripcion, imagen, disponibilidad, id_categoria) => {
    try {
        const query = 'INSERT INTO Producto (nombre_producto, precio, descripcion, imagen, disponibilidad, id_categoria) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const values = [nombre_producto, precio, descripcion, imagen, disponibilidad, id_categoria];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const editProduct = async (id_producto, nombre_producto, precio, descripcion, imagen, disponibilidad, id_categoria) => {
    try {
        const query = 'UPDATE Producto SET nombre_producto = $1, precio = $2, descripcion = $3, imagen = $4, disponibilidad = $5, id_categoria = $6 WHERE id_producto = $7 RETURNING *';
        const values = [nombre_producto, precio, descripcion, imagen, disponibilidad, id_categoria, id_producto];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteProduct = async (id_producto) => {
    try {
        const query = 'DELETE FROM Producto WHERE id_producto = $1 RETURNING *';
        const values = [id_producto];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const getById = async (id_producto) => {
    const { rows } = await pool.query('SELECT * FROM Producto WHERE id_producto = $1', [id_producto]);
    return rows[0]; // Devuelve el primer elemento encontrado o undefined
};

export const productsModel = {
    findAll,
    createProduct,
    editProduct,
    deleteProduct,
    getById,
};
