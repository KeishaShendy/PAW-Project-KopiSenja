const ProductModel = require('../models/ProductModel');
const HistoryModel = require('../models/HistoryModel');

const renderDashboard = (req, res) => res.render('dashboard');

const renderProduk = async (req, res) => {
    const menus = await ProductModel.getAll();
    res.render('produk', { menus });
};

const renderTambah = (req, res) => res.render('tambah');

const renderEdit = async (req, res) => {
    const menu = await ProductModel.getById(req.params.id);
    res.render('edit', { menu });
};

const renderRiwayat = (req, res) => {
    const histories = HistoryModel.getAll();
    res.render('riwayat', { histories });
};

const renderPengaturan = (req, res) => res.render('pengaturan');

module.exports = { renderDashboard, renderProduk, renderTambah, renderEdit, renderRiwayat, renderPengaturan };