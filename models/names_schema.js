const mongoose = require('mongoose');




const nameSchema = new mongoose.Schema({

    id:{
        //validate it is number
        type : Number,
        // validate if value has been passed
        required: true,
        // find by id if not found use this id
        unique : true,
    },
    name:{
        type: String,
        trim : true,
        required : true,
        uppercase: true, 
    }
    
}, { collection : 'names'})

module.exports = mongoose.model('names', nameSchema)