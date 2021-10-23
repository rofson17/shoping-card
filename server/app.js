//requirments
const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");

//app config
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(require("./router/contact"));


//connect database
require("./db/conn");


if (process.env.NODE_ENV == "production")
    app.use(express.static(path.join(__dirname, "../client/build")));


app.listen(PORT, () => console.log(`listening to the port ${PORT}`));
