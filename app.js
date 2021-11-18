const express = require("express");
const app = express();
var morgan = require('morgan');
const layout = require('./views/layout')
const public = express.static('./public');
//app.use(public);

// parses url-encoded bodies
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(public);

// parses json bodies
//app.use(express.json());

app.get('/', (req, res)=> {
    res.send('happy birthday');
    res.send(layout(''))
})