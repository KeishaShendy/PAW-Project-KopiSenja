const express = require('express');
const router = express.Router();
const WebController = require('../controllers/WebController');
const ApiController = require('../controllers/ApiController');

// ROUTE HALAMAN FRONTEND (Web)
router.get('/', WebController.renderDashboard);
router.get('/produk', WebController.renderProduk);
router.get('/produk/tambah', WebController.renderTambah);
router.get('/produk/edit/:id', WebController.renderEdit);
router.get('/riwayat', WebController.renderRiwayat); // Halaman Baru
router.get('/pengaturan', WebController.renderPengaturan); // Halaman Baru

// ROUTE ENDPOINT API (CRUD backend)
router.use(express.json());
router.get('/api/produk', ApiController.getProduk);
router.post('/api/produk', ApiController.createProduk);
router.put('/api/produk/:id', ApiController.updateProduk);
router.delete('/api/produk/:id', ApiController.deleteProduk);

module.exports = router;