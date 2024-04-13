const mongoose = require("mongoose");
const Account = require("../models/accountModel");

const transferFunds = async (res, fromAccId, toAccId, amount) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const fromAccount = await Account.findOne({
            userId: fromAccId,
        }).session(session);
        const toAccount = await Account.findOne({
            userId: toAccId,
        }).session(session);

        if (!fromAccount || !toAccount) {
            throw new Error("Account not found");
        }
        if (fromAccount.balance < amount) {
            throw new Error("Insufficient balance");
        }

        //update the amounts
        fromAccount.balance -= amount;
        toAccount.balance += amount;

        await fromAccount.save();
        await toAccount.save();

        await session.commitTransaction();
        session.endSession();
        return res.status(200).json({ message: " Transfered successfully" });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        return res.status(500).json({
            error: error.message,
            message: "Transfer failed",
        });
        // return false;
    } finally {
    }
};

module.exports = transferFunds;
