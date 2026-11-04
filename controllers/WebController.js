const menus = require('../models/ProductModel');

const renderDashboard = (req, res) => {
    res.render('dashboard');
};

const renderProduk = (req, res) => {
    // Mengirim data array 'menus' ke file EJS
    res.render('produk', { menus: menus });
};

module.exports = { renderDashboard, renderProduk };