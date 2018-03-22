readlineSync = require("readline-sync")
//write if else statements
//while the play has no key then play path 1 else play path 2

function path1() {
    var readlineSync = require("readline-sync")
    options = ["put hand in hole", "find key", "open the door"],
        index = readlineSync.keyInSelect(options, "Choose your path?");
    //console.log(index)
    switch (index) {
        case 0:
            console.log("you died")
            break;
        case 1:
        console.log("You found the key, but don't celebrate just yet")
        console.log(path2())
            break;
            case 2:
            console.log("You need a key first. Try again")
            console.log(path1())
            break;

    }
    //if option 1 then die
    //if option 2 then log you found the key and start path 2
    //if option 3 then log you need a key and start path 1 over
    return ''
}

function path2() {
  //  var readlineSync = require("readline-sync")
    options = ["put hand in hole", "open the door"],
        index = readlineSync.keyInSelect(options, "what do you do now?");
        switch(index){
            case 0:
            console.log("You died")
            break;
            case 1:
            console.log("You have escaped. Live well " + name + "!!!")
        }

    //if option 1 then die
    //if option 2 then hurray you have escaped
    return ''
}

//var readlineSync = require("readline-sync");
var name = readlineSync.question("What is your name?");
console.log("We do not have names here in the forgotten place. You would do well to remember that. You have 3 options. Choose wisely for I will be of no help")
console.log(path1())





//  var readlineSync = require("readline-sync"),
//  options = ["put hand in hole", "find key", "open the door"],
//  index = readlineSync.keyInSelect(options, "what do you do now?");
// console.log("ok " + name + "," + options[index] + " is now yours" )

// console.log("hello " + name + "!!")
// var hobby = readline.question("What is your favorite hobby? ");
// console.log("You are " + name + " and you love " + hobby + "? Well, that 'll be the last time that you ever get to do that. You're trapped in here mwahahaha!!!")
// function decide(){
//     var readlineSync = require("readline-sync");
//     if (readlineSync.keyInYN("gimme a hug")){
//     console.log(" and i stab you!!!")
// } else {
//     console.log(" aaaannd i stab you!!")
// }}
// console.log("There is one way to escape, but you have to agree to play a simple game. Do you agree? " + play)

// var name = readlineSync.question("What is your name?");
// console.log("hey " + name)
// secret = readlineSync.question("Hey " + name + " tell me somethin good: ",{
//     hideEchoBack: true,
// });  
// var readlineSync = require("readline-sync");
// if(readlineSync.keyInYN("blea or bleu")){
//     console.log("excellent");
// } else {
//     console.log("No!!")
// }
// var readlineSync = require("readline-sync"),
// plants = ["mandragora", "flytrap", "dryad"],
// index = readlineSync.keyInSelect(plants, "whats your fav?");
// console.log("ok " + name + "," + plants[index] + " is now yours" )