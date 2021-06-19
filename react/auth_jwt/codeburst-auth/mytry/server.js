const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const PORT = 5000;

const app = express();
const URI = process.env.URI;

app.use(express.json());
app.use(cors());


// database
mongoose.connect(
    process.env.URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("connected to db")
);

// =========================================================
//                        auth

const authRoutes = require("./route/auth");
const dashboardRoutes = require("./route/dashboard");
const verifyToken = require("./route/validate-token");

app.use("/api/user", authRoutes);
app.use("/api/dashboard", verifyToken, dashboardRoutes);


app.listen(PORT, () => {
    console.log("server is running...")
});