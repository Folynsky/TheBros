import { productsModel } from "../models/productsModel.js";

const getAllProducts = async (req, res) => {
    try {
        const response = await productsModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createProduct = async (req, res) => {
    const { nombre_producto, precio, descripcion, imagen, disponibilidad, id_categoria } = req.body;
    try {
        const newProduct = await productsModel.createProduct(nombre_producto, precio, descripcion, imagen, disponibilidad, id_categoria);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error al registrar producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const editProduct = async (req, res) => {
    const { id_producto } = req.params;
    const { nombre_producto, precio, descripcion, imagen, disponibilidad, id_categoria } = req.body;
    try {
        const updatedProduct = await productsModel.editProduct(id_producto, nombre_producto, precio, descripcion, imagen, disponibilidad, id_categoria);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(updatedProduct);
    } catch (error) {
        console.error('Error al editar producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteProduct = async (req, res) => {
    const { id_producto } = req.params;
    try {
        const deletedProduct = await productsModel.deleteProduct(id_producto);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(deletedProduct);
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getProductById = async (req, res) => {
    const { id_producto } = req.params;
    try {
        const product = await productsModel.getById(id_producto);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error al obtener producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const productsController = {
    getAllProducts,
    createProduct,
    editProduct,
    deleteProduct,
    getProductById,
};
