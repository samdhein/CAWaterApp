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