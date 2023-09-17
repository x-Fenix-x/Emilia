const express = require('express');
const { index, admin } = require('../controllers/indexController');
const router = express.Router();
const userCheck = require('../middlewares/userCheck');

/* GET / page. */
router.get('/', index);
router.get('/admin', userCheck, admin);

module.exports = router;
