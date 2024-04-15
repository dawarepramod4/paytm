const router = require("express"); 
const Account = require("../models/accountModel"); 
const zod = require("zod"); 
const transferFunds = require("../controllers/account"); 

const accountRouter = router.Router();

accountRouter.get("/balance", async (req, res) => {
    const userId = req.userId;
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
    const { success } = transferSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid request" });
    }
    const userId = req.userId;
    return await transferFunds(res, userId, req.body.to, req.body.amount);
});

module.exports = accountRouter;
