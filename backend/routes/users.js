import router from "express";
import User from "../models/userModel";

const userRouter = router.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

//zod object
const signUpSchema = z.object({
    username: z.string().nonempty(),
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty,
    password: z.string().min(6).nonempty(),
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

    res.json({
        message: "User saved successfully",
        token: token,
    });
});

export default userRouter;
