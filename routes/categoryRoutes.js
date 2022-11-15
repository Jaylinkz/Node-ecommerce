const { application } = require('express');
// const { requireAuth, checkUser } = require('../middleware/authMiddleware');
const express = require('express');
// const { body, validationResult } = require("express-validator");
const categoryController = require('../controllers/categoryController')
    //const authController = require('../controllers/authController');
const cats = express.Router();



cats.get('/categories', categoryController.Category_get);
cats.post('/add-categories', categoryController.Add_category);


module.exports = cats;