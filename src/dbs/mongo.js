const mongoose = require('mongoose');
class Mongo {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose.connect('mongodb+srv://nguyenduong24112000:duong@duong.tnvpuey.mongodb.net/shop-web', {})
            .then(() => {
                console.log('Database connection succesfull');
            })
            .catch(err => {
                console.error('Database connection error');
            })
    }
}
module.exports = new Mongo();