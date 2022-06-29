// 1 require express
const express = require("express");

// 2 create instance
const app = express();

// 3 require dotenv
require("dotenv").config();

// connection DB
const connectDB = require("./config/connectDB");
connectDB();

// Routing
// middleware global
app.use(express.json());

/// middleware route
app.use("/api/user", require("./routes/user"));
// app.use("/api/user", require("./routes/user"))
// app.use("/api/product", require("./routes/product"))

// 4 create PORT
const PORT = process.env.PORT;

// 5 create server
app.listen(PORT, (err) =>
	err ? console.error(err) : console.log(`Server is running on port ${PORT} ..`)
);
