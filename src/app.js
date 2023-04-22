const express = require('express');
const { handler } = require('./errors');
const app = express();
//let us call some inbuilt express wares

app.use(
    express.urlencoded({
        limit: "100mb",
        extended: true
    })
);

app.use (
    (req,res,next)=>{
        console.log("Request received:", req.method, req.url);
        next();
    }
)

// error handlers
app.use(handler);

module.exports = app;