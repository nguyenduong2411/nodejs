const express = require('express');
const router = express.Router();
const path = require('path');
const ProductController = require('../controller/product.controller')
const UserModel = require('../models/user.model')
router.use('/api/v1/product', require('./product'));

router.get('/', async(req, res) => {
    const indexView = path.join(__dirname, '../views/index.ejs')
    res.render(indexView);
});

//view product
router.get('/product', async(req, res) => {
    const indexView = path.join(__dirname, '../views/product.ejs')
    res.render(indexView);
});

//view header
router.get('/header', async(req, res) => {
    const indexView = path.join(__dirname, '../views/header.ejs')
    res.render(indexView);
});

//view footer
router.get('/footer', async(req, res) => {
    const indexView = path.join(__dirname, '../views/footer.ejs')
    res.render(indexView);
});

//view cart
router.get('/cart', async(req, res) => {
    const indexView = path.join(__dirname, '../views/cart.ejs')
    res.render(indexView);
});
//view signin
router.get('/signin', async(req, res) => {
    const indexView = path.join(__dirname, '../views/signin.ejs')
    res.render(indexView);
});
//view signup
router.get('/signup', async(req, res) => {
    const indexView = path.join(__dirname, '../views/signup.ejs')
    res.render(indexView);
});
router.get('/detail/:id', async(req, res) => {
    const id = req.params.id;
    const indexView = path.join(__dirname, '../views/detail.ejs')
    const product = await ProductController.getProduct(id);
    res.render(indexView, { product });
});

router.get('/admin', async(req, res) => {
    const indexView = path.join(__dirname, '../views/admin.ejs')
    res.render(indexView);
});

// sign up
router.post('/submit', async(req, res) => {
    const data = req.body;
    try {
        UserModel.insertMany({
            username: data.username,
            email: data.email,
            password: data.password

        });
    } catch (e) {
        throw new Error("Missing")
    } finally {
        res.redirect("/signin")
    }
})

// sign in
router.post('/login', async(req, res) => {
        const data = req.body;
        const user = await UserModel.findOne({ username: data.username, password: data.password });
        if (user) {
            res.redirect("/")
        } else {
            res.redirect("/signin")
        }
    })
    //admin
router.get('/admin.insert', async(req, res) => {
    const indexView = path.join(__dirname, '../views/admin.insert.ejs')
    res.render(indexView);
});
//view product
router.get('/admin.view', async(req, res) => {
    const indexView = path.join(__dirname, '../views/admin.view.ejs')
    res.render(indexView);
});
module.exports = router;