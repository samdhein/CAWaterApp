const Trinity = require("../models/Trinity.model")

// show all Trinity measurements
module.exports.allTrinityMeasurements = (req, res) => {
    Trinity.find().sort({DATE: 1})
        .then(results=>res.json(results))
        .catch(err=> res.status(400).json(err))
}

// create new Trinity measurement
module.exports.createTrinityMeasurement = (req, res) => {
    Trinity.create(req.body)
        .then(newMeasurement => res.json(newMeasurement))
        .catch(err=> res.status(400).json(err))
}
