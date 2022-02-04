const Cachuma = require("../models/cachuma.model")

// show all castaic measurements
module.exports.allCachumaMeasurements = (req, res) => {
    Cachuma.find().sort({DATE: 1})
        .then(results=>res.json(results))
        .catch(err=> res.status(400).json(err))
}

// create new reservoir measurement
module.exports.createCachumaMeasurement = (req, res) => {
    Cachuma.create(req.body)
        .then(newMeasurement => res.json(newMeasurement))
        .catch(err=> res.status(400).json(err))
}
