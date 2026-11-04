const menus = require('../models/ProductModel');

const getStatus = (req, res) => {
    res.json({
        status: "success",
        message: "Aplikasi berjalan normal"
    });
};

const getProduk = (req, res) => {
    res.json(menus);
};

module.exports = { getStatus, getProduk };