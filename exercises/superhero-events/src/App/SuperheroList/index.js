import React from "react";
import Superhero from "../Superhero/";
import superheros from "../superhero.json";

function SuperheroList() {
    function speak(phrase){
        alert(phrase)
    }
    const superheroArr = superheros.map(hero => <Superhero key={hero.img} handleClick={speak} {...hero}/>)
    return (
        <div>
            {superheroArr}
        </div>
    )
}

export default SuperheroList;