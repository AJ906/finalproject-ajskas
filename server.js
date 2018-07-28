const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const proxy = require("http-proxy-middleware");
const PORT = process.env.PORT || 3002;


global.globalString = "This can be accessed anywhere!";
console.log(globalString);

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.use('/', proxy({target: "localhost:3002", changeOrigin: true}));

var db = process.env.MONGODB_URI || "mongodb://localhost:27017/vData";

// Connect to the Mongo DB
mongoose.connect(db, { useNewUrlParser: true }, function(error) {

  if (error) {
    console.log(error);
  }
  else {
    console.log("mongoose connection is successful");
  }

});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
