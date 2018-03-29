var readlineSync = require("readline-sync")
//player
var player = {
    name: name,
    hp: 10,
    wolfPelts: []
}
// function getItems(){
//     var newPelts = player.wolfPelts.push(1)
//     return newPelts;
// }


var Enemy = function () {
    this.type = this.getRandomType();
    this.hp = this.genHitPoints();
}


Enemy.prototype.getRandomType = function () {
    var enemyTypes = ["Big Daddy Alpha", "Beta Wuss", "Omega Jabroni"];
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randIndex];
}
Enemy.prototype.genHitPoints = function () {
    switch (this.type) {
        case "Big Daddy Alpha":
            return Math.floor(Math.random() * 21) + 80;
        case "Beta Wuss":
            return Math.floor(Math.random() * 30) + 50;
        case "Omega Jabroni":
            return Math.floor(Math.random() * 30) + 20;
    }
}







function battle() {
    

    // new Enemy();
    var curEnemy = new Enemy();

    console.log(curEnemy)
    console.log("A wild " + curEnemy.type + " appears")
    while (player.hp > 0 && curEnemy.hp > 0) {
        options = ["desperate swing", "run for the hills", "murderize", "check status"],
            index = readlineSync.keyInSelect(options, "what do you do now?");
        switch (index) {
            case 0:
                desperateSwing(curEnemy);
                break;
            case 1:
                run();
                break;
            case 2:
                murderize(curEnemy);
                break;
            case 3:
                checkStatus()
                break;
            // case 4:
            //     murderize(curEnemy);
            //     break;
            // case 5:
            //     checkStatus();
            //     break;
            default:
                player.hp = 0;
        }
        if (curEnemy.hp < 1) {
            // player.wolfPelts.push(1)
            player.wolfPelts++
            // if((player.hp <1) && (player.wolfPelts === 3)){
            //     console.log("you done good kid")
            // }
            mainMenu()
        }

        // if (curEnemy.hp < 1) {
        //     getBelt()
        //     console.log("You did it!")
        //add +1 championship belt to player object
        //add +x to player hp
        //     return mainMenu()
        // }
    }

}


function run() {
    var chance = Math.floor((Math.random() * 2) + 1);
    if (chance > 1)
        mainMenu(console.log("You barely escaped"));

    else {
        console.log("Oh no!! You tripped on a branch")
        return player.hp = player.hp - Math.floor((Math.random() * 2) + 1)
    }
    //     options = ["jab", "heavy", "suplex"],
    //    index = readlineSync.keyInSelect(options, "what do you do now?");

    //run generate enemy function

    console.log("You're determined to survive")

    // function printEnemies() {
    //     for (var i = 0; i < 100; i++) {
    //         return new Enemy();
    //         return wrastle();
    //     }
    // }
    //attack options


}

function murderize(curEnemy) {
    console.log("You murderized you foe!")
    curEnemy.hp = 0
    player.wolfPelts++

}

function checkStatus() {
    console.log("You reflect on your imminent demise")
    console.log(`You have ${player.hp} life left and you have ${player.wolfPelts} pelts gathered`)
}

function desperateSwing(curEnemy) {
    //subtract this from enemy.hp
    console.log("Hyaaaa!!")
    console.log(player.wolfPelts)
    console.log(curEnemy.hp)
    return curEnemy.hp = curEnemy.hp - Math.floor((Math.random() * 20) + 1)
}

// function haymaker(curEnemy) {
    //subtract this from enemy.hp
//     return curEnemy.hp - Math.floor((Math.random() * 4) + 1)
// }

// function suplex(curEnemy) {
    //subtract this from enemy.hp
//     return curEnemy.hp - Math.floor((Math.random() * 3) + 1)
// }

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
//main menu
function mainMenu() {
    
    // if (player.wolfPelts === 3) {
            
    // }
    
    console.log("You soldier on despite the blistering cold")
    // if (player.championshipBelt === 1,1,1) {
    //     console.log("Huzzah! You made it to the inn")
    // }

    var onwards = readlineSync.keyIn("hit the w key to travel towards the inn: ", {
        limit: "w",
    })

    //add get into battle
    function genBattle() {
        var randGen = Math.floor((Math.random() * 3) + 1);
        if (randGen > 2){
            return battle();
        }else(
            console.log("You stumble aimlessly through the woods"))
        // return mainMenu();
    }
    if (keyIn = "w") {
        return genBattle()
    }


}
//battle
console.log("I'M COLD AND THERE ARE WOLVES AFTER ME!!!")
var name = readlineSync.question("You wake up bloody but not completely broken. Pieces of the airplane you were in litter the snow. You try to remember your name. What was it again?");
console.log("Alright " + name + " the only way to survive the night is to make it to the inn. You hear the growling of hungry wolves coming from the darkness. Some vacation this ended up being...")
while ((player.hp > 0) && (player.wolfPelts < 3)) {
    //intro

    mainMenu()
}
console.log("You finally found the inn. You drink a beer to celebrate!!!")
        player.hp =0

// mainMenu()

    // if (player.wolfPelts === 3) {
    //     player.hp = 0
    //     console.log("Huzzah! You made it to the inn")
        
    // }

//win con

//lose con
if ((player.hp < 1) && (player.wolfPelts < 3)) {
    console.log("You are dogfood")
}
console.log(player.hp)