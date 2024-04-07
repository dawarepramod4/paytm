const express = require("express");
require("dotenv").config();

const rootRouter = require("./routes/index");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const router = express.Router();

//cors
app.use(cors());
app.use(express.json());

//routes to backend
app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
