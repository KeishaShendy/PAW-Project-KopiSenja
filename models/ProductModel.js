const db = require('../config/database');

const ProductModel = {
    getAll: async () => {
        const result = await db.query('SELECT * FROM produk ORDER BY id ASC');
        return result.rows;
    },
    getById: async (id) => {
        const result = await db.query('SELECT * FROM produk WHERE id = $1', [id]);
        return result.rows[0];
    },
    create: async (data) => {
        const { kategori, nama, harga, stok, gambar } = data;
        const result = await db.query(
            'INSERT INTO produk (kategori, nama, harga, stok, gambar) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [kategori, nama, harga, stok, gambar]
        );
        return result.rows[0];
    },
    update: async (id, data) => {
        const { kategori, nama, harga, stok, gambar } = data;
        const result = await db.query(
            'UPDATE produk SET kategori=$1, nama=$2, harga=$3, stok=$4, gambar=$5 WHERE id=$6 RETURNING *',
            [kategori, nama, harga, stok, gambar, id]
        );
        return result.rows[0];
    },
    delete: async (id) => {
        await db.query('DELETE FROM produk WHERE id = $1', [id]);
        return true;
    }
};

module.exports = ProductModel;