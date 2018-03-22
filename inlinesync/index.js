var rs = require("readline-sync");
var myName = rs.question ("what's your name?")
// var myAge = rs.question ("whats your age?")
// rs.question("what's your name?")
console.log("Welcome, ".toUpperCase() + myName + "!");
var myAge = rs.question ("what's your age?")
console.log("My, you're getting a little gray there...")
var favColor = rs.question ("What's your fav color?")
console.log("there's " + favColor.length  + " letters in that color")
console.log("So, you are " + myAge.concat(favColor))
if(myAge.concat(favColor).length> 20)
    console.log("That's too long!!")
//ask for a long string
//store long str
//take str find length cut in half
//return half
