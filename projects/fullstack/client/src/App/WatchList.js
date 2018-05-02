import React from "react";
import List from "./List"

function WatchList(props) {
    return (
        <div className="watchList">
            <h1 className="watchTitle">My Watch List</h1>
            <h3 className="priceUpdate">Prices are updated every 24 hrs</h3>
            <List />
        </div>
    )
}

export default WatchList;