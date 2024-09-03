/**
 * @author kevin
 * @version 1.0.0
 * Rutas de orders
 * Este archvo define rutas de los pedidos
 */

const{ Router } = require('express');
const router = Router();
//Import from methods
const {AddOrders,ShowOrder,ShowOrders,EditOrders,DeleteOrders} = require('../controllers/order.controller');

//Rutas

router.get('/:id',ShowOrder);
router.get('/',ShowOrders);
router.post('/',AddOrders);
router.put('/',EditOrders);
router.delete('/',DeleteOrders);

module.exports = router;

