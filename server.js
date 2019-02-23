const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 30002;
const app = express();

//Require mongoose
const mongoose = require("mongoose");

//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve up static assets
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Connect to the mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
mongoose.connect("mongod://localhost/unit18Populater", { useNewUrlParser: true });


//Define API route here

//Send every request 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  