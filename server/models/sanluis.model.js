// require mongoose
const mongoose = require('mongoose')

// create a schema
const SanluisSchema = new mongoose.Schema({
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
const Sanluis = mongoose.model('Sanluis', SanluisSchema)
module.exports = Sanluis