const Category = require('../models/categories');




module.exports.Category_get = (req, res) => {

    Category.find().sort({
        createdAt: -1
    }).then((result) => {
        res.render('category', { title: 'all category', categories: result })
    }).catch((err) => {
        console.log(err);
    })
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

module.exports.Delete_category = (req, res) => {


    const id = req.params.id;
    Category.findByIdAndDelete(id).
    then((result) => {
        res.json({ redirect: '/categories' })
    }).catch((err) => {
        res.status(404).render('404', { title: 'page not found' });
    });

}
module.exports.Update_category = () => {

}