import router from "express";
import Account from "../models/accountModel";
import authenticate from "../middleware";
import zod from "zod";
import transferFunds from "../controllers/account";

const accountRouter = router.Router();

accountRouter.use(authenticate);

accountRouter.get("/balance", async (req, res) => {
    const user = req.user;
    const accounts = await Account.findOne(user._id);
    res.json({
        balance: accounts.balance,
    });
});

const transferSchema = zod.object({
    to: zod.string(),
    amount: zod.number().positive(),
});

accountRouter.post("/transfer", async (req, res) => {
    const { to, amount } = transferSchema.parse(req.body);
    const user = req.user;
    await transferFunds(user._id, to, amount);

    res.json({ message: "Transfer successful" });
});

export default accountRouter;
