const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    balance: {
        type: Number,
        required: true,
    },
});

const Account = mongoose.model("account", accountSchema);
module.exports = Account;
