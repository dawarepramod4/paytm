import router from "express";
import User from "../models/userModel";
import authenticate from "../middleware";
import Account from "../models/accountModel";
const z = require("zod");

const userRouter = router.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

//zod object
const signUpSchema = z.object({
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(6),
});

userRouter.post("/signUp", async (req, res) => {
    //check the correctness of the data
    const { success } = signUpSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({ message: "Invalid data" });
    }

    //check if the user already exists
    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    //create a new user
    const newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    });

    const user = await newUser.save();
    const userId = user._id;
    const token = jwt.sign({ userId }, JWT_SECRET);

    //assign a random value to the account balance
    Account.create({ userId: userId, balance: 1 + Math.random() * 10000 });

    res.json({
        message: "User saved successfully",
        token: token,
    });
});

const signingBody = z.object({
    username: z.string(),
    password: z.string().min(6),
});
userRouter.post("/login", async (req, res) => {
    //validate
    const { success } = signingBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid data" });
    }
    const user = User.findOne({ username: req.body.username, password: req.body.password });

    if (user) {
        const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRET);
        res.json({
            message: "User logged in successfully",
            token: token,
        });
    }

    res.status(400).json({ message: "Error While logging in!" });
});

const updateSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().min(6).optional(),
});
userRouter.put("/update", authenticate, async (req, res) => {
    //validate
    const { success } = updateSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid data" });
    }

    const user = await User.updateOne({ _id: req.user._id }, req.body);

    if (!user) {
        return res.status(400).json({ message: "User does not exist" });
    }
    res.json({ message: "User updated successfully" });
});

userRouter.get("/user/bulk", authenticate, async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{ firstName: { $regex: filter } }, { lastName: { $regex: filter } }],
    });
    res.json({
        users: users.map((user) => {
            return {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                _id: user._id,
            };
        }),
    });
});

export default userRouter;
