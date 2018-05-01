import React from "react";
import { connect } from "react-redux";
import { removeOneCard, postCard } from "../../redux/cards";
import Item from "./Item"


function List(props) {
    const cardsComponents = props.data.map((card, i) => <Item {...card}
        removeOneCard={props.removeOneCard} index={i} key={card.id} ></Item>)
    return (
        <div>
            {cardsComponents}
        </div>
    )
}
const mapStateToProps = state => {
    return state.cards;
}

export default connect(mapStateToProps, { removeOneCard, postCard })(List);

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
    //     const { favorites, loading, errMsg} = this.props;

    //     const cardComponents = favorites
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