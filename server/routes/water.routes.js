const OrovilleController = require("../controllers/oroville.controller")
const ShastaController = require("../controllers/shasta.controller")
const TrinityController = require("../controllers/trinity.controller")
const SanluisController = require("../controllers/sanluis.controller")
const CastaicController = require("../controllers/castaic.controller")
const CachumaController = require("../controllers/cachuma.controller")

// initially comment all but the index

module.exports = app => {
    // console.log("server/routes")
    app.get("/api", OrovilleController.index) // root, routes to Oroville Controller
    app.post("/api/oroville/measurements", OrovilleController.createOrovilleMeasurement) // create an oroville measurement
    app.get("/api/oroville/measurements", OrovilleController.allOrovilleMeasurements)  // get all oroville measurements
    app.post("/api/shasta/measurements", ShastaController.createShastaMeasurement) // create a shasta measurement
    app.get("/api/shasta/measurements", ShastaController.allShastaMeasurements)  // get all shasta measurements
    app.post("/api/trinity/measurements", TrinityController.createTrinityMeasurement) // create a trinity measurement
    app.get("/api/trinity/measurements", TrinityController.allTrinityMeasurements)  // get all trinity measurements
    app.post("/api/sanluis/measurements", SanluisController.createSanluisMeasurement) // create a san luis measurement
    app.get("/api/sanluis/measurements", SanluisController.allSanluisMeasurements)  // get all san luis measurements
    app.post("/api/cachuma/measurements", CachumaController.createCachumaMeasurement) // create a cachuma measurement
    app.get("/api/cachuma/measurements", CachumaController.allCachumaMeasurements)  // get all cachuma measurements
    app.post("/api/castaic/measurements", CastaicController.createCastaicMeasurement) // create a castaic measurement
    app.get("/api/castaic/measurements", CastaicController.allCastaicMeasurements)  // get all castaic measurements
//     app.get("/api/authors/:id", AuthorController.oneAuthor) // get one author (:keyname must match req.params.keyname in controller)
//     app.put("/api/authors/:id", AuthorController.updateAuthor) // update one author
//     app.delete("/api/authors/:id", AuthorController.deleteAuthor) // delete one author
}