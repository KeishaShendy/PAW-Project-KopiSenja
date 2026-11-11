const ProductModel = require('../models/ProductModel');

const getStatus = (req, res) => res.json({ status: "REST API Terhubung ke PostgreSQL" });

const getProduk = async (req, res) => {
    try {
        const data = await ProductModel.getAll();
        res.json(data);
    } catch (err) { res.status(500).json({ error: err.message }); }
};

const getProdukById = async (req, res) => {
    try {
        const data = await ProductModel.getById(req.params.id);
        res.json(data);
    } catch (err) { res.status(500).json({ error: err.message }); }
};

const createProduk = async (req, res) => {
    try {
        const data = await ProductModel.create(req.body);
        res.status(201).json({ message: "Berhasil ditambah", data });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

const updateProduk = async (req, res) => {
    try {
        const data = await ProductModel.update(req.params.id, req.body);
        res.json({ message: "Berhasil diperbarui", data });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

const deleteProduk = async (req, res) => {
    try {
        await ProductModel.delete(req.params.id);
        res.json({ message: "Berhasil dihapus" });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

module.exports = { getStatus, getProduk, getProdukById, createProduk, updateProduk, deleteProduk };