const ProductModel = require('../models/product.model');

class ProductController {
    async getListProduct() {
            const product = await ProductModel.find().exec();
            return (product);
            //res.render('admin.view', { product });
        }
        // async getProduct(req, res) {
        //     const product = await ProductModel.findById(req.params._id);
        //     return res.json(product);
        // }
    async getProduct(id) {
        const product = await ProductModel.findById(id).exec();
        console.log(id);
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
        const productId = req.params.id;
        const deleteProduct = await ProductModel.findByIdAndDelete(productId);
        res.redirect("/admin.view");
    }
}
module.exports = new ProductController();