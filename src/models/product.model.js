const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    oldPrice: {
        type: Number,
        require: true
    },
    thumbnail: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    reviews: {
        type: Array,
        require: false,
        default: []
    },
    image: {
        type: Array,
        require: false,
        default: []
    },
    size: {
        type: Array,
        require: false,
        default: []
    },
    cout_sold: {
        type: Number,
        require: false,
        default: 0
    },
    category: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: false,
        default: 0
    },
    creates_by: {
        type: String,
        require: true
    },
    created_at: {
        type: String,
        require: true,
        default: Date.now
    },
    updated_at: {
        type: String,
        require: true
    },
    view: {
        type: Number,
        require: false,
        default: 0
    },
    status: {
        type: Number,
        require: false,
        default: 1
    },
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;