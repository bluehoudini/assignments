var readlineSync = require("readline-sync")
//player
var player = {
    name: name,
    hp: 10,
    championshipBelt: 0,
}



var Enemy = function () {
    this.type = this.getRandomType();
    this.hp = this.genHitPoints();
}


Enemy.prototype.getRandomType = function () {
    var enemyTypes = ["The Crushinator", "El Panthera", "Jabroni Jim"];
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randIndex];
}
Enemy.prototype.genHitPoints = function () {
    switch (this.type) {
        case "The Crushinator":
            return Math.floor(Math.random() * 21) + 80;
        case "El Panthera":
            return Math.floor(Math.random() * 30) + 50;
        case "Jabroni Jim":
            return Math.floor(Math.random() * 30) + 20;
    }
}

//intro
console.log("message")
var name = readlineSync.question("What's your name kid?");
console.log("Alright " + name + " here's what you have to do...")
mainMenu()
//main menu
function mainMenu() {
    console.log("Let's go do this thing!")
    var onwards = readlineSync.keyIn("hit the w key to wait until your next fight!!: ", {
        limit: "w",
    })
    //add get into battle
    function genBattle() {
        var randGen = Math.floor((Math.random() * 3) + 1);
        if (randGen > 2)
            return battle();


        else(
            console.log("You play vidya games instead"))
        return mainMenu();


    }
    if (keyIn = "w") {
        return genBattle()
    }


}
//battle



function battle() {

    // new Enemy();
    var curEnemy = new Enemy();
    console.log(curEnemy)
    console.log("A wild " + curEnemy.type + " appears")
    while (player.hp >0 && curEnemy.hp >0){
    options = ["jab", "haymaker", "suplex", "forfeit", "murderize"],
        index = readlineSync.keyInSelect(options, "what do you do now?");
    switch (index) {
        case 0:
            jab(curEnemy);
            break;
        case 1:
            haymaker(curEnemy);
            break;
        case 2:
            suplex(curEnemy);
            break;
        case 3:
            forfeit()
            break;
            case 4:
            murderize(curEnemy);
            break;
        default:
            player.hp = 0;
    }
    if (curEnemy.hp < 1) {
        getBelt()
        console.log("You did it!")
        //add +1 championship belt to player object
        //add +x to player hp
        return mainMenu()
    }
}

}
function getBelt(){
     player.championshipBelt.push(1);
 }
function forfeit() {
    var chance = Math.floor((Math.random() * 2) + 1);
    if (chance > 1)
        mainMenu(console.log("you quit"));

    else {
        console.log("you can't quit yet")
    }
    //     options = ["jab", "heavy", "suplex"],
    //    index = readlineSync.keyInSelect(options, "what do you do now?");

    //run generate enemy function

    console.log("Let's go do this thing!")

    // function printEnemies() {
    //     for (var i = 0; i < 100; i++) {
    //         return new Enemy();
    //         return wrastle();
    //     }
    // }
    //attack options


}
function murderize(curEnemy){
curEnemy.hp = 0
}
function jab(curEnemy) {
    //subtract this from enemy.hp
    console.log('i am jab')
    console.log(player.championshipBelt)
    console.log(curEnemy.hp)
    return curEnemy.hp = curEnemy.hp - Math.floor((Math.random() * 20) + 1)
}
function haymaker(curEnemy) {
    //subtract this from enemy.hp
    return curEnemy.hp - Math.floor((Math.random() * 4) + 1)
}

function suplex(curEnemy) {
    //subtract this from enemy.hp
    return curEnemy.hp - Math.floor((Math.random() * 3) + 1)
}

// if (player.options.value === jab && enemy.attack.value === jab) {

// }

// var playerPick
// if (playerPick === "rock") {
//     if (compPick === "rock") {
//         player.hp -= Math.floor(Math.random() * 1);
//         enemy.hp -= Math.floor(Math.random() * 1);
//     } else if (compPick === "scissors") {
//         player.hp -= Math.floor(Math.random() * 1);
//         enemy.hp -= Math.floor(Math.random() * 5);
//     } else if (compPick === "paper") {
//         player.hp -= Math.floor(Math.random() * 5);
//         enemy.hp -= Math.floor(Math.random() * 1);

//     }
// }
// if (playerPick === "scissors") {
//     if (compPick === "rock") {
//         player.hp -= Math.floor(Math.random() * 1);
//         enemy.hp -= Math.floor(Math.random() * 5);
//     } else if (compPick === "scissors") {
//         player.hp -= Math.floor(Math.random() * 1);
//         enemy.hp -= Math.floor(Math.random() * 1);
//     } else if (compPick === "paper") {
//         player.hp -= Math.floor(Math.random() * 5);
//         enemy.hp -= Math.floor(Math.random() * 1);

//     }
// }
// if (playerPick === "paper") {
//     if (compPick === "rock") {
//         player.hp -= Math.floor(Math.random() * 5);
//         enemy.hp -= Math.floor(Math.random() * 1);
//     } else if (compPick === "scissors") {
//         player.hp -= Math.floor(Math.random() * 1);
//         enemy.hp -= Math.floor(Math.random() * 5);
//     } else if (compPick === "paper") {
//         player.hp -= Math.floor(Math.random() * 1);
//         enemy.hp -= Math.floor(Math.random() * 1);
//     }
// }
while (player.hp > 0 && player.championshipBelt < 3) {
    mainMenu()
}
//win con
if (player.championshipBelt === 3) {
    
    console.log("You are the greatest champ ever!!!")
}
//lose con
if (player.hp < 1) {
    console.log("You Have Lost")
}
console.log(player.hp)