const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'please enter a category name']
    },

}, { timestamps: true });

categorySchema.post('save', (doc, next) => {
    console.log('new user created and saved', doc);
    next();
});

//static method to log users in

const Category = mongoose.model('category', categorySchema);
module.exports = Category;