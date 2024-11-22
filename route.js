const express = require('express');
const router= express.Router();
const productService= require('./product/productService');
const userService= require('./user/userService');
const cartService= require('./cart/cartService');
const LoginService=require('./user/LoginService')

//For product service
router.route('/products/add').post(productService.AddProduct);
router.route('/products').get(productService.GetAllproducts);
router.route('/products/update').post(productService.UpdateProduct);
router.route('/products/remove').get(productService.DeleteProduct);
router.route('/products/sort/:value').get(productService.Sort);
router.route('/products/category').get(productService.types);
router.route('/products/categorys/:id').get(productService.Categorys);
router.route('/products/:id').get(productService.GetProductById);
router.route('/products/quantities').post(productService.CartQantities);
router.route('/products/pages').post(productService.limit);
//For cart service

router.route('/cart/add').post(cartService.AddCart);
router.route('/cart/:id').get(cartService.ViewCart);
router.route('/cart/update').post(cartService.UpdateCart);
router.route('/cart/Remove').get(cartService.RemoveCart);

//For user service
router.route('user/add').post(userService.AddUser);
router.route('user/:id').get(userService.GetUserById);

//for login
router.route('user/login').post(LoginService.Createuser);




module.exports= router;