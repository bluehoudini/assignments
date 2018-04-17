import React, { Component } from "react";
import { connect } from 'react-redux'
// import tacoFanyUrl from "../../redux/tacos.js"

// import tacoReducer from "../../redux/tacos";
import { getTacos } from "../../redux/tacos.js"
import Recipe from "./Recipe"


class GenTaco extends Component {

    render() {
        // const { tacoFanyUrl } = this.state.inputs;
        
        // const{name, recipe}=this.props
        const {data} = this.props
        console.log(this.props)
        return (
                
            <div className="genTaco">
                <button onClick={this.props.getTacos}>Press for taco</button>
                {/* {this.state} */}
                <Recipe {...data}></Recipe>
                {/* <h1>{data}</h1> */}
            </div>
            
        )
    }

}
           
const mapStateToProps = state => {
    return state.tacos;
}

export default connect(mapStateToProps, { getTacos })(GenTaco);