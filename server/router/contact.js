const router = require("express").Router();
const contactSchema = require("../models/contactSchema");

//handle the contact page
router.post("/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message)
        return res.status(400).json({ "message": "failed" });

    try {
        const contactInfo = contactSchema({ name, email, subject, message });
        await contactInfo.save();
        return res.status(200).json({ "message": "success" });

    } catch {
        return res.status(400).json({ "message": "failed" });

    }

    // console.log(`name ${name} \nemail ${email} \nsubject ${subject}\n message ${message}`);
});


module.exports = router;
