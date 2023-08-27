const express = require('express');
const { index } = require('../controllers/indexController');
const router = express.Router();

/* GET / page. */
router.get('/', index);

module.exports = router;
