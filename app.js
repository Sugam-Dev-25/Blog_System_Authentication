require("dotenv").config();
const express = require("express");
const path = require("path");
const cors= require("cors");
const connectDB = require("./app/config/database");

const app = express();
app.use(express.json());

app.use(cors());

connectDB();

app.use(express.static(path.join(__dirname, "public")));
app.use('uploads', express.static(path.join(__dirname, "uploads")));
app.use('/uploads', express.static( "uploads"));

const port =5000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
