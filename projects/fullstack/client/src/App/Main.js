import React, { Component } from "react";
import Form from "./Form"
import { connect } from "react-redux"
import { getOneCard } from "../redux/cards"
import FullCard from "./genCard/FullCard"




class Main extends Component {
    componentDidMount() {
        this.props.getOneCard(this.props);
    }

    render() {
        const { data } = this.props
        const cardComponents = data
            .map((cards, i) => <FullCard key={cards._id} getOneCard={getOneCard}{...cards} />)
        console.log(this.props)
        return (
            <div className="genCard">
                <p className="intro">The mtg card price tracker<br />you've been looking for</p>
                <p className="searchHere">Search here to look up a card</p>
                <Form />
                {/* <p className="moreInfo">Search from among the entire magic the gathering library to find the </p> */}
                {/* <button onClick={getCards}>search</button> */}
                {cardComponents}
            </div>

        )
    }

}

const mapStateToProps = state => {
    return state.cards;
}

export default connect(mapStateToProps, { getOneCard })(Main);