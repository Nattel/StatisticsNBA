const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

const twitterRouter = require("./routes/twitter")
const cosRouter = require("./routes/cos")
const nluRouter = require("./routes/nlu")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/twiter', twitterRouter);
app.use('/cos', cosRouter);
app.use('/nlu', nluRouter);

module.exports = app;
