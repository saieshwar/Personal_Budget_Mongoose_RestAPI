const mongoose = require('mongoose');


const budgetSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,

    },
    related_value:{
        type: Number,
        required: true,
    },
    color : {
        type: String,
        required: true,
        validate: [isHexColor, 'color is not a Hex Color']
    },
}, {collection: 'budget'})


function isHexColor(s) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(s)
}
module.exports = mongoose.model('budget',budgetSchema)