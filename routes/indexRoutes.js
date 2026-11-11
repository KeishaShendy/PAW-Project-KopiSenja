const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/ApiController');
const WebController = require('../controllers/WebController');

// Wajib ditambah agar API bisa membaca format request POST/PUT
router.use(express.json()); 

// ROUTE HALAMAN FRONTEND (Web)
router.get('/', WebController.renderDashboard);
router.get('/produk', WebController.renderProduk);
router.get('/produk/tambah', WebController.renderTambah); // Tambahan
router.get('/produk/edit/:id', WebController.renderEdit); // Tambahan

// ROUTE ENDPOINT API (CRUD backend)
router.get('/api/status', ApiController.getStatus);
router.get('/api/produk', ApiController.getProduk);
router.get('/api/produk/:id', ApiController.getProdukById); // Tambahan
router.post('/api/produk', ApiController.createProduk); // Tambahan
router.put('/api/produk/:id', ApiController.updateProduk); // Tambahan
router.delete('/api/produk/:id', ApiController.deleteProduk); // Tambahan

module.exports = router;