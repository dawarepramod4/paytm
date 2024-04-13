// import router from "express";
const router = require("express"); // 1
// import Account from "../models/accountModel";
const Account = require("../models/accountModel"); // 2
// import authenticate from "../middleware";
// const authenticate = require("../middleware").default; // 3
// import zod from "zod";
const zod = require("zod"); // 4
// import transferFunds from "../controllers/account";
const transferFunds = require("../controllers/account"); // 5

const accountRouter = router.Router();

accountRouter.get("/balance", async (req, res) => {
    const userId = req.userId;
    console.log(userId);
    const accounts = await Account.findOne({ userId: userId });
    if (accounts === null) {
        return res.status(400).json({ message: "Account not found!" });
    }
    return res.json({
        balance: accounts.balance,
    });
});

const transferSchema = zod.object({
    to: zod.string(),
    amount: zod.number().positive(),
});

accountRouter.post("/transfer", async (req, res) => {
    const { success, to, amount } = transferSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid request" });
    }
    const userId = req.userId;
    const transfered = await transferFunds(userId, to, amount);
    if (!transfered) {
        return res.status(400).json({ message: "Transfer failed" });
    }
    return res.json({ message: "Transfer successful" });
});

module.exports = accountRouter;
