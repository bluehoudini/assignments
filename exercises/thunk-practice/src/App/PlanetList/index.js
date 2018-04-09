import React, { Component } from "react";

import { connect } from "react-redux";
import { getPlanets } from "../../redux/planets.js";

class PlanetList extends Component {
    componentDidMount(){
        this.props.getPlanets();
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                smore test
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state.planets;
}
export default connect(mapStateToProps, { getPlanets }) (PlanetList);