const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modelSchema = new Schema({
    model: String,
    img: String,
    name: String,
    info: String,
    complect_details: [
        {
            model: String, 
            img: String, 
            name: String, 
            info: String,
        }
    ]
})

const Model = mongoose.model("model", modelSchema);

module.exports = Model; { }