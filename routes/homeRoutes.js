const express = require('express');
const { getHomepageData } = require('../controllers/homeController');

const router = express.Router();

router.get('/', getHomepageData);

module.exports = router;
