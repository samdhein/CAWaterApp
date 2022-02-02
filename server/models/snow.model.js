const mongoose = require('mongoose')

// create a schema
const SnowSchema = new mongoose.Schema({
    measurement_site: {
        type: String,   // (String, Number, Boolean, Array)
        required : [true, "Measurement Site is required"],  // validation
    },
    snow_depth: {
        type: Number, 
        required : [true, "Snow Depth is required"],  // validations
    },
    measurement_date: {
        type: String, 
        required : [true, "Measurement Date is required"],  // validations
    }
}, {timestamps: true})

// export
const Snow = mongoose.model('Snow', SnowSchema)
module.exports = Snow