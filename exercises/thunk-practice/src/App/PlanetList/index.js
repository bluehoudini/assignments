import React, { Component } from "react";

import { connect } from "react-redux";
import { getPlanets } from "../../redux/planets.js";
// import {planetComponents} from "../PlanetList";
import PlanetItem from "./PlanetItem/index.js";

class PlanetList extends Component {
    componentDidMount() {
        this.props.getPlanets();
    }
    render() {
        const { data, loading, errMsg } = this.props;
        const planetComponents = data.map((planet, i)=>
    <PlanetItem key={planet.name + i}
    {...planet}></PlanetItem>)
        if (loading) {
            return(
                <div>...loading</div>
            )
        }else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        }else {
            return (
                <div>
                    {planetComponents}
                </div>
            )
        }
                   
    }
}
const mapStateToProps = state => {
    return state.planets;
}
export default connect(mapStateToProps, { getPlanets })(PlanetList);