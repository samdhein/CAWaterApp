const Shasta = require("../models/shasta.model")

// show all shasta measurements
module.exports.allShastaMeasurements = (req, res) => {
    Shasta.find().sort({DATE: 1})
        .then(results=>res.json(results))
        .catch(err=> res.status(400).json(err))
}

// create new shasta measurement
module.exports.createShastaMeasurement = (req, res) => {
    Shasta.create(req.body)
        .then(newMeasurement => res.json(newMeasurement))
        .catch(err=> res.status(400).json(err))
}
