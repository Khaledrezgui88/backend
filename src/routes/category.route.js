import express from 'express';

// Import controllers and middlewares
import categoryControllers from '../controllers/category.controller.js'
import isAuth from '../middlewares/permission/isAuth.js';
import isAdmin from '../middlewares/permission/isAdmin.js';

const router = express.Router();

// Define routes
router.post('/', categoryControllers.createCategory);
router.get('/:id', categoryControllers.getOneCategory);// ctrolr espace
router.get('/', categoryControllers.getAllCategory);// ctrolr espace
router.put('/:id',categoryControllers.updateCategory);
router.delete('/:id',categoryControllers.deleteCategory);



export default router;
