const express = require("express");

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DBU).catch((err) => console.log(err));
const app = express();
const userdata = require("./users/adduser");
const getall = require("./users/getAll");
const addoneuser = require("./users/addone");
const updateOne = require("./users/find.edit");
const deleted = require("./users/removeByID");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/userData", userdata);
app.get("/getall", getall);
app.post("/add", addoneuser);
app.patch("/update/:id", updateOne);
app.delete("/deleteuser", deleted);

app.listen(2000, console.log("running on 2000"));
