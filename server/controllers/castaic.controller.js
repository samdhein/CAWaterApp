const Castaic = require("../models/castaic.model")

// show all castaic measurements
module.exports.allCastaicMeasurements = (req, res) => {
    Castaic.find().sort({DATE: 1})
        .then(results=>res.json(results))
        .catch(err=> res.status(400).json(err))
}

// create new reservoir measurement
module.exports.createCastaicMeasurement = (req, res) => {
    Castaic.create(req.body)
        .then(newMeasurement => res.json(newMeasurement))
        .catch(err=> res.status(400).json(err))
}
