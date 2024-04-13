const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const header = req.headers.authorization;
    //if no header presents
    if (!header || !header.startsWith("Bearer")) {
        console.log(req.headers);
        return res.status(403).json({ message: "No authnetication token, authorization denied" });
    }
    try {
        //extract token from header
        const token = header.split(" ")[1];
        const verified = jwt.verify(token, JWT_SECRET);
        req.userId = verified.userId;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid token" });
    }
};

module.exports = authenticate;
