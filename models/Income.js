const mongoose = require("mongoose");
const incomeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Income", incomeSchema);