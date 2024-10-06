import { Router } from "express";
import { categoriesController } from "../controllers/categoriesController";
import { productsController } from "../controllers/productsController";


const router = new Router();

//rutas para los productos
router.get('/products/', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.post('/products/', productsController.createProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

//rutas para las categorias
router.get('/categories/', categoriesController.getAllCategories);
router.put('/categories/:id', categoriesController.updateCategory);
router.post('/categories/', categoriesController.createCategory);
router.put('/categories/', categoriesController.updateCategory);
router.delete('/categories/:id', categoriesController.deleteCategory);


export default router;