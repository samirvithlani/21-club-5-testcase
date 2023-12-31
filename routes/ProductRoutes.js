const router = require('express').Router();
const productController = require('../controllers/ProductController');

router.post('/create',productController.createProduct);
router.get('/product',productController.getProduct);
module.exports = router;