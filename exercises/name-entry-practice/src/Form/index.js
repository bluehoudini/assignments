import React, { Component } from "react";
import List from "../List"
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: "",
                email: "",
                random: ""
            },
            people: []
        }
        // this.state = this.initialState
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        //take value form the input, and set state accordingly
        const { value, name, random } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value,
                }
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState(prevState => {
            return{
                inputs: {
                name: "",
                email: "",
                random: "",
                },
                people: [...prevState.people, prevState.inputs]
            }
        });

    }

    render() {
        const { name, email, random } = this.state.inputs;
        const{people}=this.state;
        return (
           
            <form onSubmit ={this.handleSubmit}>
                <input name="name" onChange={this.handleChange} value={name} type="text" placeholder="enter name" />
                <input name="email" onChange={this.handleChange} value={email} type="email" placeholder="@email" />
                <input name="random" onChange={this.handleChange} value={random} type="random" placeholder="fill the void" />
                <button>submit</button>
                <p>hi my name is {name}</p>
                {/* {render a list component, pass into it via props this.state.people, map through each item, and render a person component containing individual info} */}
                <List people={people}></List>
            </form>
            
        )
    }
}


export default Form;