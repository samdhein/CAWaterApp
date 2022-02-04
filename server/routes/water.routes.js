const OrovilleController = require("../controllers/oroville.controller")
const ShastaController = require("../controllers/shasta.controller")
const TrinityController = require("../controllers/trinity.controller")

// initially comment all but the index

module.exports = app => {
    // console.log("server/routes")
    app.get("/api", OrovilleController.index) // root, routes to Oroville Controller
    app.post("/api/oroville/measurements", OrovilleController.createOrovilleMeasurement) // create an oroville measurement
    app.get("/api/oroville/measurements", OrovilleController.allOrovilleMeasurements)  // get all oroville measurements
    app.post("/api/shasta/measurements", ShastaController.createShastaMeasurement) // create a shasta measurement
    app.get("/api/shasta/measurements", ShastaController.allShastaMeasurements)  // get all shasta measurements
    app.post("/api/trinity/measurements", TrinityController.createTrinityMeasurement) // create a shasta measurement
    app.get("/api/trinity/measurements", TrinityController.allTrinityMeasurements)  // get all shasta measurements
//     app.get("/api/authors/:id", AuthorController.oneAuthor) // get one author (:keyname must match req.params.keyname in controller)
//     app.put("/api/authors/:id", AuthorController.updateAuthor) // update one author
//     app.delete("/api/authors/:id", AuthorController.deleteAuthor) // delete one author
}