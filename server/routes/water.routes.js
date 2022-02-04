const OrovilleController = require("../controllers/oroville.controller")

// initially comment all but the index

module.exports = app => {
    // console.log("server/routes")
    app.get("/api", OrovilleController.index) // root
    app.post("/api/oroville/measurements", OrovilleController.createOrovilleMeasurement) // create an oroville measurement
    app.get("/api/oroville/measurements", OrovilleController.allOrovilleMeasurements)  // get all oroville measurements
//     app.get("/api/authors/:id", AuthorController.oneAuthor) // get one author (:keyname must match req.params.keyname in controller)
//     app.put("/api/authors/:id", AuthorController.updateAuthor) // update one author
//     app.delete("/api/authors/:id", AuthorController.deleteAuthor) // delete one author
}