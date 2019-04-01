require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());


const userRoutes = require("./routes/user");
const authRoutes = require("./routes/authentication")
//for user
app.use("/api/users", userRoutes);

//for register and login
app.use("/api", authRoutes);

module.exports = app;
app.listen(port, () => console.log("listening on port" + port));