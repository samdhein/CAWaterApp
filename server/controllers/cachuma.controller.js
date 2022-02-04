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
///////////
// show one author
module.exports.oneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err=> res.status(400).json(err))
}

// update one author
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},  // need id
        req.body, // need body
        { new: true, runValidators: true }  // need in order to apply validations to update
        )
        .then(author => res.json(author))
        .catch(err=> res.status(400).json(err))
}

// delete one author
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err=> res.status(400).json(err))
}