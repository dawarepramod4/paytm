const express = require("express");
require("dotenv").config();

const rootRouter = require("./routes/index");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
// const router = express.Router();
const Uri = "mongodb://localhost:27017/paytm";

mongoose.connect(Uri);
//cors
app.use(cors());
app.use(express.json());

//routes to backend
app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
