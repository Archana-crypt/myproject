const mongoose = require('mongoose')


const weatherSchema = new mongoose.Schema({
    area: {
        type: String,
        required:true
    },
    temp: {
        type: String,
        required: true
    }



})
module.exports =mongoose.model('Weather',weatherSchema)