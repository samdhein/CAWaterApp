// import dependencies
const express = require("express");
const app = express();
const cors = require("cors")

// config mongoose
require('./config/mongoose.config')

// config express, cors
app.use(cors()) 
app.use(express.json(), express.urlencoded({ extended: true })) // POST method

// routes
require("./routes/water.routes")(app);  

// listen to port 
const port = 8000;
app.listen(port, ()=> console.log(`listening on port: ${port}`))

