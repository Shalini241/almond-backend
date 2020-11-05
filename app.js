const express = require("express");
const path = require("path");
var favicon = require("serve-favicon");
const dotenv = require("dotenv");
const body_parser = require("body-parser"); 
dotenv.config();

var formulaeRoute = require("./routes/formulae");
var homeRoute = require("./routes/home");

var app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
// view engine setup
app.use(favicon(__dirname + "/static/images/logo.png"));

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "static")));

//routes
app.use("/allformulae", formulaeRoute);
app.use("/home", homeRoute);

app.listen(3000);

// Creating Tables
const sequelize = require('./config/database');
const models = require('./config/init_models');

sequelize.sync({alter: true});

module.exports = app;