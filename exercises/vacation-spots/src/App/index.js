import React from "react"
import Vacay from "./Vacay"

const vacationSpots = [  
    {
      place: "Meridian, Idaho",
      price: "$40",
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: "$900",
      timeToGo: "Winter"
    },{
      place: "China",
      price: "$1200",
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: "$1100",
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: "$400",
      timeToGo: "Spring"
    }
  ]

function App(){
    return(
        <div>
            <Vacay></Vacay>
        </div>
    )
}

export default "./App"