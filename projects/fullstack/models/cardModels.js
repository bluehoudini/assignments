const mongoose = require("mongoose");

const { Schema } = mongoose;



//only keep id
//when i click the add to watchlist button the id of the card is pushed into my array of saved ids
//when page mounts it looks at the array of ids and gets the data from the scryfall api

//test function to add card id to watchlist
const addCardId = ((props, array) => {
    return this.card.id.push(favorites)
});

//test function that looks at the array of ids and renders them from the scryfall api
const showSavedCards = (() => {
    //map through the scryfall api
    //if the id of a card in your watchlist matches the id of card in scryfall api then render that card
});

//my very lonely schema
const cardSchema = new Schema(
    {
        // "object": String,
        "cardId": {
            type: String,
            // unique: true
        },
        // "name": String,
        // "uri": String,
        // "scryfall_uri": String,
        // "layout": String,
        // "highres_image": Boolean,
        // "image_uris": {
        //     "small": String,
        //     "normal": String,
        //     "large": String,
        //     "png": String,
        // },
        // "cmc": Number,
        // "type_line": String,
        // "oracle_text": String,
        // "mana_cost": String,
        // "colors": [
        //     String
        // ],
        // "color_identity": [
        //     String
        // ],
        // "set": String,
        // "set_name": String,
        // "set_uri": String,
        // "set_search_uri": String,
        // "scryfall_set_uri": String,
        // "rulings_uri": String,
        // "prints_search_uri": String,
        // "rarity": String,
        // "usd": String,
        // "eur": String,
        // "related_uris": {
        //     "gatherer": String,
        //     "mtgtop8": String
        // },

        // "purchase_uris": {
        //     "amazon": String,
        //     "ebay": String,
        //     "tcgplayer": String,
        //     "magiccardmarket": String,
        //     "cardhoarder": String,
        //     "card_kingdom": String,
        //     "mtgo_traders": String,
        //     "coolstuffinc": String
        // }
    })

const CardModel = mongoose.model("cards", cardSchema);
module.exports = CardModel;