import React from "react"
import Pets from "../Pets"

function Friends(props){
    const {name, age, pets} = props;
    const buddyPets = pets.map((petObj, index)=><Pets key = {petObj.name + index} {...petObj} />)
    console.log(props)
    return(

        
        <div >
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            {buddyPets}
            
            
        </div>
      
    )
}

export default Friends;