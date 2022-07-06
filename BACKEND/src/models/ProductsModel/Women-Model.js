
const mongoose = require("mongoose");

const WomenSchema = new mongoose.Schema({

    id: { type: Number, required: true },
    image_url: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
    Item: { type: Number, required: false, default: 1 }

})

module.exports = mongoose.model("women", WomenSchema)