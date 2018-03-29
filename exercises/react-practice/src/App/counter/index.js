class Counter extends Component {
    constructor(props) {
        //this is where you define static properties
        super(props);
        this.state = {
            counter:0 
        };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.reset = this.reset.bind(this);
        }
        incrementCounter(){
            //tell react what the new state should look like
            this.setState(prevState => {
                return{
                    counter:prevState.counter + 1
                }
            });
    }
    resetState(){
        this.setState({counter:0});
    }
    //dont do this!!!
    //this.state.counter = 1;
    //this are defines methods
    render(){
        const {counter}=this.state;
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick={this.incrementCounter}>+1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
    }
    

// function counter() {
//     return (
//         <div>
           
//         </div>
//     )
// }

export default Counter;