const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modelSchema = new Schema({
    model: String,
    img: String,
    name: String,
    info_1: String,
    info_2: String,
    info_3: String,
    info_4: String,
    info_5: String,
    info_6: String,
    info_7: String,
    info_8: String,
    info_9: String,
    info_10: String,
    main_info: String,
    complect_details: [
        {
            model: String, 
            img: String, 
            name: String, 
            info_1: String,
            info_2: String,
            info_3: String,
            info_4: String,
            info_5: String,
            info_6: String,
            info_7: String,
            info_8: String,
            info_9: String,
            info_10: String,
            main_info: String,
        }
    ]
})

const Model = mongoose.model("model", modelSchema);

module.exports = Model; { }