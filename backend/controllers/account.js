const mongoose = require('mongoose');
const Account = require('../models/accountModel');

const transferFunds = async (fromAccId,toAccId, amount) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const opts = { session };
        const fromAccount = await Account.findOne({ userId: fromAccId }).session(session);
        const toAccount = await Account.findOne({ userId: toAccId }).session(session);
        if (!fromAccount || !toAccount) {
            return res.status(400).json({ message: 'Account not found' });
        }
        if (fromAccount.balance < amount) {
            return res.status(400).json({ message: 'Insufficient funds' });
        }
        fromAccount.balance -= amount;
        toAccount.balance += amount;
        await fromAccount.save(opts);
        await toAccount.save(opts);
        await session.commitTransaction();
        session.endSession();
        // return res.json({ message: 'Transfer successful' });
        return true;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        // return res.status(500).json({ message: 'Transfer failed' });
        return false;
    }
}

export default transferFunds;
