const validateChatInput = (req, res, next) => {
    const { menuName, platform, tone } = req.body;
    
    if (!menuName || !platform || !tone) {
        return res.status(400).json({ success: false, error: "Data promosi (Menu, Platform, Tone) tidak lengkap." });
    }
    next();
};
module.exports = validateChatInput;