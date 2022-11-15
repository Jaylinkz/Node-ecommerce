const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please enter your first name']
    },
    description: {
        type: String,
        required: [true, 'please product description']
    },
    price: {
        type: Number,
        required: [true, 'please enter product price']
    },
    quantity: {
        type: Number,
        required: [true, 'please enter product quantity'],

    },
    image: {
        type: String,
        required: [true, 'update a product image']
    },
}, { timestamps: true });

productSchema.post('save', (doc, next) => {
    console.log('a new product was added', doc);
    next();
});


const Product = mongoose.model('product', productSchema);
module.exports = Product;