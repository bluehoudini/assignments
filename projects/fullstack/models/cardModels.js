const mongoose = require("mongoose");

const {Schema} = mongoose;

const cardSchema = new Schema({
    "tcg_low": String,
            "tcg_mid": String,
            "purchase_link": String,
            "foil_price": String,
            // "price_change": "1",
            "mc": String,
            "main_type": String,
            "colors": String,
            "name": String,
            "mid": String,
            "t": String,
            "set": String,
            "rarity": String,
            "types": String,
            "set_code": String,
            "expansion": String,
            // "reserve_list": "0",
            // "emid": "9523",
            // "inventory_id": "18521944",
            // "note_id": "0",
            // "condition": "NM",
            "lang": String,
            "date_acquired": String,
            // "foil": "0",
            "price_acquired": String,
            "current_price": String,
            "personal_gain": String,
            "set_image": String,
            "image_cropped": String,
            "image": String,
            // "gain": "0.00",
            "echo_set_url": String,
            "echo_url": String,
            "percentage_html": String,
            // "market_percentage_html": "<span class=\"percentage green up\">1%</span>"

})

const CardModel = mongoose.model("cards", cardSchema);
module.exports = CardModel;