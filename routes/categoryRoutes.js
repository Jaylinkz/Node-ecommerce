// const { application } = require('express');
// const { requireAuth, checkUser } = require('../middleware/authMiddleware');
const express = require('express');
// const { body, validationResult } = require("express-validator");
const categoryController = require('../controllers/categoryController')
    //const authController = require('../controllers/authController');
const router = express.Router();



router.get('/categories', categoryController.Category_get);
router.post('/categories', categoryController.Add_category);