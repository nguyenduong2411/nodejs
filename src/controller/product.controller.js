const ProductModel = require('../models/product.model');

class ProductController {
    async getListProduct(req, res) {
            const product = await ProductModel.find();
            //return res.json(product);
            console.log(product);
            return product;
        }
        // async getProduct(req, res) {
        //     const product = await ProductModel.findById(req.params._id);
        //     return res.json(product);
        // }
    async getProduct(id) {
        const product = await ProductModel.findById(id);
        return product;
    }

    async createProduct(req, res) {
        const product = req.body;
        const newProduct = new ProductModel(product);
        await newProduct.save();
        res.redirect('/admin.insert');
    }
    async updateProduct(req, res) {
        const body = req.body;
        const updateProduct = await ProductModel.findByIdAndUpdate(req.params._id, body);
        const product = await ProductModel.findById(req.params._id);
        return res.json(product);
    }
    async deleteProduct(req, res) {
        const product = await ProductModel.findByIdAndDelete(req.params._id);
        return res.json(product);
    }
}
module.exports = new ProductController();