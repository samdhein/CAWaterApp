const mongoose = require('mongoose')

// create a schema
const ReservoirSchema = new mongoose.Schema({
    reservoir_name: {
        type: String,   // (String, Number, Boolean, Array)
        required : [true, "Reservoir Name is required"],  // validation
    },
    reservoir_level: {
        type: Number, 
        required : [true, "Reservoir Level is required"],  // validations
    },
    measurement_date: {
        type: String, 
        required : [true, "Measurement Date is required"],  // validations
    }
}, {timestamps: true})

// export
const Reservoir = mongoose.model('Reservoir', ReservoirSchema)
module.exports = Reservoir