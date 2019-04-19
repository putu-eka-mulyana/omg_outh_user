const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const users = require("./routes/api/users.js");
const app = express();
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(bodyParser.json());
const db = require('./config/keys.js').monggoURL;
mongoose
	.connect(db,{ useNewUrlParser: true })
	.then(()=> console.log("Mongodb Successfull"))
	.catch(err => console.log(err));
app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/users",users);
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server up and running on port ${port} !`)); 