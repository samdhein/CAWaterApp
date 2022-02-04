const Sanluis = require("../models/sanluis.model")

// show all Sanluis measurements
module.exports.allSanluisMeasurements = (req, res) => {
    Sanluis.find().sort({DATE: 1})
        .then(results=>res.json(results))
        .catch(err=> res.status(400).json(err))
}

// create new Trinity measurement
module.exports.createSanluisMeasurement = (req, res) => {
    Sanluis.create(req.body)
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