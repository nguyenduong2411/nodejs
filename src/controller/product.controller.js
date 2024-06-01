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
        res.redirect('/admin-insert');
    }
    async updateProduct(id) {
        const body = req.body;
        const updateProduct = await ProductModel.findByIdAndUpdate(req.params.id, body).exec();
        const product = await ProductModel.findById(req.params.id);
        res.redirect('/admin-update');
    }
    async deleteProduct(req, res) {
        const productId = req.params_id;
        const deleteProduct = await ProductModel.findByIdAndDelete(productId);
        res.redirect("/admin-view");
        cốnsole.log(id);
    }
}
module.exports = new ProductController();