// File: models/ProductModel.js
const menus = [
    { 
        id: 1, 
        kategori: "Kopi Susu", 
        nama: "Iced Aren Latte", 
        harga: 25000, 
        stok: 45, 
        gambar: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80" 
    },
    { 
        id: 2, 
        kategori: "Kopi Hitam", 
        nama: "Americano Hot", 
        harga: 20000, 
        stok: 30, 
        gambar: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80" 
    },
    { 
        id: 3, 
        kategori: "Non-Kopi", 
        nama: "Matcha Latte", 
        harga: 28000, 
        stok: 25, 
        // Mengganti link gambar matcha yang error dengan link yang lebih stabil
        gambar: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=300&q=80" 
    },
    { 
        id: 4, 
        kategori: "Non-Kopi", 
        nama: "Red Velvet", 
        harga: 27000, 
        stok: 15, 
        gambar: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&w=300&q=80" 
    }
];

module.exports = menus;