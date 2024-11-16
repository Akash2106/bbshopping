const express = require('express');
const router= express.Router();
const productService= require('./product/productService');
const userService= require('./user/userService');
const cartService= require('./cart/cartService');

//For product service
router.route('/products/add').post(productService.AddProduct);
router.route('/products').get(productService.GetAllproducts);
router.route('/products/:id').get(productService.GetProductById);
router.route('/products/update').post(productService.UpdateProduct);
//For cart service

router.route('/cart/add').post(cartService.AddCart);
router.route('/cart/:id').get(cartService.ViewCart);
router.route('/cart/Remove').post(cartService.removeCart);

//For user service
router.route('user/add').post(userService.AddUser);
router.route('user/:id').get(userService.GetUserById);



module.exports= router;