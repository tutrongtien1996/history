const express = require('express');
const { HomeController } = require('../controller/home.js');

const HomeRouter = express.Router();
HomeRouter.get('/',  HomeController.home)
module.exports = {HomeRouter}