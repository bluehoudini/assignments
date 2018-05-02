import React from "react";
import removeOneCard from "../../../redux/cards"

function Item (props) {
   
    // const { name, object, id, oracle_id, multivers_ids, uri, scryfall_uri, layout, highres_image, image_uris, small, normal, large, png, cmc, type_line, oracle_text, mana_cost, colors, color_identity, set, set_name, set_uri, set_search_uri, scryfall_set_uri, rulings_uri, prints_search_uri, rarity, usd, eur, related_uris, gatherer, purchase_uris, amazon, ebay, tcgplayer, magiccardmarket, card_kingdom, mtgo_traders, coolstuffinc } = props
    const { id, image_uris, usd, tix, removeOneCard} = props;
    return (
        <div className="fullCard">
            {/* <h2>{object}</h2> */}
            <img src={image_uris.normal} alt=""/>
            {/* <img src={highres_image} alt=""/> */}
            <h3>Market Price: ${usd} <br/> Tix: {tix} </h3>
            <button onClick={() => removeOneCard(id)}>remove this card</button>
            {/* <EditForm index={index} imgUrl={imgUrl} caption={caption}></EditForm> */}
            </div>
    )
}
export default Item;