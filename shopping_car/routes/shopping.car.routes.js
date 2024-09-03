/**
 * @author
 * @version
 * cart routes
 * this file difines cart routes
 */
const { Router } = require('express')
const router =Router();
//import from methods
const{AddProduct,DeleteProducts,CalculateTotal,CheckOut} = require('../controllers/shopping.car.controller');

//Routes


router.post('/',AddProduct);
router.delete('/',DeleteProducts);
router.get('/',CalculateTotal);
router.get('/',CheckOut);




module.exports = router;
