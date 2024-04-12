const express = require("express");
const userRouter = require("./users");
const router = express.Router();

router.use("/users", userRouter);
router.use("/accounts", accountRouter);

module.exports = router;
