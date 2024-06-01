const express = require('express');
const router = express.Router();
const ProductModel = require('../../models/product.model')
const ProductController = require('../../controller/product.controller')
router.get('/', (req, res) => {
    res.send('Product route');
});

router.get('/list-product', ProductController.getListProduct);

router.get('/get-product/:_id', ProductController.getProduct);

router.post('/create-product', ProductController.createProduct);

router.put('/update-product/:_id', ProductController.updateProduct);

router.delete('/delete-product/:id', ProductController.deleteProduct);

module.exports = router;