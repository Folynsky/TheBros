import { categoriesModel } from "../models/categoriesModel.js";

const getAllCategories = async (req, res) => {
    try {
        const response = await categoriesModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createCategory = async (req, res) => {
    const { nombre_categoria } = req.body;
    try {
        const newCategory = await categoriesModel.createCategory(nombre_categoria);
        res.status(201).json(newCategory);
    } catch (error) {
        console.error('Error al registrar categoría:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const editCategory = async (req, res) => {
    const { id_categoria } = req.params;
    const { nombre_categoria } = req.body;
    try {
        const updatedCategory = await categoriesModel.editCategory(id_categoria, nombre_categoria);
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json(updatedCategory);
    } catch (error) {
        console.error('Error al editar categoría:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteCategory = async (req, res) => {
    const { id_categoria } = req.params;
    try {
        const deletedCategory = await categoriesModel.deleteCategory(id_categoria);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json(deletedCategory);
    } catch (error) {
        console.error('Error al eliminar categoría:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getCategoryById = async (req, res) => {
    const { id_categoria } = req.params;
    try {
        const category = await categoriesModel.getById(id_categoria);
        if (!category) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json(category);
    } catch (error) {
        console.error('Error al obtener categoría:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const categoriesController = {
    getAllCategories,
    createCategory,
    editCategory,
    deleteCategory,
    getCategoryById,
};
