const geminiService = require('../services/gemini.service');
const HistoryModel = require('../models/HistoryModel');

const handlePromoGeneration = async (req, res) => {
    try {
        const { menuName, platform, tone } = req.body;
        const aiResponse = await geminiService.generatePromo(menuName, platform, tone);

        // Simpan otomatis ke riwayat
        HistoryModel.add({
            menuName,
            platform: platform || 'Telegram',
            tone,
            caption: aiResponse
        });

        res.json({ success: true, data: { reply: aiResponse } });
    } catch (error) {
        console.error("Error dari Gemini:", error);
        res.status(500).json({ success: false, error: "Layanan AI sedang sibuk atau API Key tidak valid." });
    }
};

module.exports = { handlePromoGeneration };