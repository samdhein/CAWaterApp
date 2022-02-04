// require mongoose
const mongoose = require('mongoose')

// create a schema
const ShastaSchema = new mongoose.Schema({
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
const Shasta = mongoose.model('Shasta', ShastaSchema)
module.exports = Shasta