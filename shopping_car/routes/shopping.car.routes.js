/**
 * @author
 * @version
 * cart routes
 * this file difines cart routes
 */
const { Router } = require('express');
const router = Router();

// Importar los controladores correctamente
const { AddProduct, DeleteProduct, ShowShoppingCar } = require('../controllers/shopping.car.controller');

// Rutas
router.get('/:id', ShowShoppingCar);
router.post('/', AddProduct);
router.delete('/', DeleteProduct);


module.exports = router;

