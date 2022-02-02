// import dependencies
const express = require("express");
const app = express();
const cors = require("cors")

// config mongoose
require('./config/mongoose.config')

// config express, cors
app.use(cors()) // 2 communicate btw front and back ends
app.use(express.json(), express.urlencoded({ extended: true })) // POST method

// routes
// comment out routes until they're set up in order to start server without issue
// console.log("server.js: before routes")
require("./routes/water.routes")(app);  

// listen to port 
const port = 8000;
app.listen(port, ()=> console.log(`listening on port: ${port}`))

// guide:
    // get server and config working... "established a connection to the database" in terminal. comment out routes setup until they're ready.
    // set up model
    // set up controller, routes
    // 