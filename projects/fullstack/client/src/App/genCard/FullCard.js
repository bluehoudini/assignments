import React from "react";
import { addToWatchlist } from "../../redux/cards"
import { connect } from "react-redux"

function FullCard(props) {
    // console.log(props)
    const { image_uris, usd, id, tix } = props;
    // const { addToWatchList, name, object, id, oracle_id, multivers_ids, uri, scryfall_uri, layout, highres_image, image_uris, small, normal, large, png, cmc, type_line, oracle_text, mana_cost, colors, color_identity, set, set_name, set_uri, set_search_uri, scryfall_set_uri, rulings_uri, prints_search_uri, rarity, usd, eur, related_uris, gatherer, purchase_uris, amazon, ebay, tcgplayer, magiccardmarket, card_kingdom, mtgo_traders, coolstuffinc } = props
    // const addToWatchList = (e) => {
    // }
    return (
        <div className="fullCard">
            {/* <h2>{object}</h2> */}
            <img src={image_uris.normal} alt="" />
            <h3 className="fullCard">Market Price: <br/> ${usd} <br />  Tix: {tix}</h3>
            <button id={id} onClick={() => props.addToWatchlist(id)}>add to watchlist</button>
        </div>
    )
}

export default connect(null, {addToWatchlist})(FullCard);
