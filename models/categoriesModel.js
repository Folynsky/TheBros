import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM Categoria ORDER BY id_categoria ASC");
    return rows;
};

const createCategory = async (nombre_categoria) => {
    try {
        const query = 'INSERT INTO Categoria (nombre_categoria) VALUES ($1) RETURNING *';
        const values = [nombre_categoria];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const editCategory = async (id_categoria, nombre_categoria) => {
    try {
        const query = 'UPDATE Categoria SET nombre_categoria = $1 WHERE id_categoria = $2 RETURNING *';
        const values = [nombre_categoria, id_categoria];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteCategory = async (id_categoria) => {
    try {
        const query = 'DELETE FROM Categoria WHERE id_categoria = $1 RETURNING *';
        const values = [id_categoria];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const getById = async (id_categoria) => {
    const { rows } = await pool.query('SELECT * FROM Categoria WHERE id_categoria = $1', [id_categoria]);
    return rows[0]; // Devuelve el primer elemento encontrado o undefined
};

export const categoriesModel = {
    findAll,
    createCategory,
    editCategory,
    deleteCategory,
    getById,
};
