const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    // const { name, email, subject, message } = req.body;
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

const contact = mongoose.model("contact2", contactSchema);

module.export = contact;