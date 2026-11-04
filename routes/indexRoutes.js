const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/ApiController');
const WebController = require('../controllers/WebController');

// Halaman Web (2 Halaman)
router.get('/', WebController.renderDashboard);
router.get('/produk', WebController.renderProduk);

// Endpoint API JSON
router.get('/api/status', ApiController.getStatus);
router.get('/api/produk', ApiController.getProduk);

module.exports = router;