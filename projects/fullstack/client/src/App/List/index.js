import React, { Component } from "react";
import { connect } from "react-redux";
import { removeOneCard, getFavorites } from "../../redux/cards";
import Item from "./Item";

class List extends Component {
    componentDidMount() {
        this.props.getFavorites();
    }

    render() {
        const watchlistComponents = this.props.favoriteCards.map(card => {

            // search the mtg data (props.data) for the card with cardId
            // const card = props.data.find(apiCard => apiCard.id === cardId);
            // console.log(card.image_uris)
            return <Item {...card} removeOneCard={this.props.removeOneCard} key={card._id} />
        });

        return (
            <div>
                {watchlistComponents}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state.cards;
}

export default connect(mapStateToProps, { removeOneCard, getFavorites })(List);

// import React, { Component } from "react";

// import { connect } from "react-redux";
// import { getCards } from "../../redux/cards";

// import Item from "./Item";

// class List extends Component {
//     componentDidMount() {
//         this.props.getCards(this.props.offset);
//     }
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.offset !== this.props.offset && nextProps.offset < Math.floor(1471)){
    //        this.props.getSuperHeroes(nextProps.offset); 
    //     }
    // }

    // filter the data ... data.filter
    // add props to the state... new state that gets updated as value changes


    // render() {
    //     const { favoriteIds, loading, errMsg} = this.props;

    //     const cardComponents = favoriteIds
        //     .filter((card, i) => {
        //         if(!searchTerm) return true;
        //         return superhero.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(searchTerm.toLowerCase().replace(/[^a-z0-9]/g, ''));
        //     })
        //     .map((superhero, i) => <Item key={superhero.name + i} {...superhero}></Item>)

//         if (loading) {
//             return (
//                 <div>...Loading</div>
//             )
//         } else if (errMsg) {
//             return (
//                 <div>{errMsg}</div>
//             )
//         } else {
//             return (
//                 <div>
//                     {cardComponents}
//                 </div>
//             )
//         }
//     }
// }

// const mapStateToProps = state => {
//     return state.card;
// }

// export default connect(mapStateToProps, { getCards })(List);