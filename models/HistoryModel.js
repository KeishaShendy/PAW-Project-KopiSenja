const fs = require('fs');
const path = require('path');

// File penyimpanan otomatis di folder utama proyek
const filePath = path.join(__dirname, '../riwayat.json');

const getAll = () => {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([], null, 2));
            return [];
        }
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const add = ({ menuName, platform, tone, caption }) => {
    const histories = getAll();

    const now = new Date();
    const tanggal = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' });
    const jam = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false }).replace('.', ':');

    const newEntry = {
        id: Date.now(),
        waktu: `${tanggal}, ${jam}`,
        menu: menuName,
        platform: platform || 'Telegram',
        tone: tone,
        caption: caption
    };

    // Masukkan ke urutan paling atas (terbaru di atas)
    histories.unshift(newEntry);
    fs.writeFileSync(filePath, JSON.stringify(histories, null, 2));
    return newEntry;
};

module.exports = { getAll, add };