const Sanluis = require("../models/sanluis.model")

// show all Sanluis measurements
module.exports.allSanluisMeasurements = (req, res) => {
    Sanluis.find().sort({DATE: 1})
        .then(results=>res.json(results))
        .catch(err=> res.status(400).json(err))
}

// create new sanluis measurement
module.exports.createSanluisMeasurement = (req, res) => {
    Sanluis.create(req.body)
        .then(newMeasurement => res.json(newMeasurement))
        .catch(err=> res.status(400).json(err))
}
