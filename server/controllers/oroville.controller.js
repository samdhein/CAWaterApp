const Oroville = require("../models/oroville.model")

module.exports.index = (req, res) => {
    res.json({message: "Hello, you've reached the index"})
}

// show all oroville measurements
module.exports.allOrovilleMeasurements = (req, res) => {
    Oroville.find().sort({DATE: 1})
        .then(results=>res.json(results))
        .catch(err=> res.status(400).json(err))
}

// create new oroville measurement
module.exports.createOrovilleMeasurement = (req, res) => {
    Oroville.create(req.body)
        .then(newMeasurement => res.json(newMeasurement))
        .catch(err=> res.status(400).json(err))
}
