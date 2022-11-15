const Category = require('../models/categories');




module.exports.Category_get = (req, res) => {
    res.render('category');
}

module.exports.Add_category = async(req, res) => {

    const { name } = req.body;
    try {
        const category = await Category.create({ name: name });
        res.status(201).json({});

    } catch (err) {

        console.log(err);

    }

}