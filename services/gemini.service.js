const genAI = require('../config/gemini');

const generatePromo = async (menuName, platform, tone) => {
    try {
        // Membaca nama model dari file .env (Ide cerdas Anda!)
        // Jika di .env kosong, sistem akan pakai "gemini-1.5-flash" sebagai cadangan
        const aiModelName = process.env.GEMINI_MODEL || "gemini-1.5-flash";
        
        const model = genAI.getGenerativeModel({
            model: aiModelName
        });

        const formatInstruction = "Buat teks yang asik, singkat, padat, dan langsung to-the-point. Sangat cocok untuk dibaca cepat di grup/channel Telegram mahasiswa.";

        const prompt = `ATURAN SISTEM:
Kamu adalah Copywriter andalan kafe 'Kopi Senja'. Tugasmu HANYA membuat teks promosi menu kafe.
- JIKA MENU BUKAN MINUMAN/MAKANAN KAFE, TOLAK: "Maaf, saya asisten Kopi Senja dan hanya membuat promosi kopi."

PERMINTAAN PENGGUNA:
Buatkan teks promosi untuk menu "${menuName}".
Gaya bahasa: "${tone}".
Platform: Telegram.
Panduan: ${formatInstruction}`;

        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        throw new Error(`Gagal meracik kata-kata menggunakan model ${process.env.GEMINI_MODEL}: ` + error.message);
    }
};

module.exports = { generatePromo };