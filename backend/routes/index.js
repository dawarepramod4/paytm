const express = require("express");
const userRouter = require("./users");
const accountRouter = require("./accounts");
const authenticate = require("../middleware");
const router = express.Router();

router.use("/users", userRouter);
router.use("/account",authenticate, accountRouter);

module.exports = router;
