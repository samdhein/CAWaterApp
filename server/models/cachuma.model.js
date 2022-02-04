// require mongoose
const mongoose = require('mongoose')

// create a schema
const CachumaSchema = new mongoose.Schema({
    DATE: {
        type: String, 
        required : [true, "Measurement Date is required"],  // validations
    },
    STORAGE: {
        type: Number, 
        required : [true, "Reservoir Storage is required"],  // validations
    }
}, {timestamps: true})

// export
const Cachuma = mongoose.model('Cachuma', CachumaSchema)
module.exports = Cachuma