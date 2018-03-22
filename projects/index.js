/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.
In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function whoWins(is, there, kryptonite, enemyName) {
    if (!is - there - kryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyname + " could possibly win this one.";
    }
}

for (var i = 0; i < enemies.length; i++) {
    var isThereKryptonite;
        if ([i]% 2 === 0); {
            isThereKryptonite = true;
        } else {
            isThereKryptonite = false;
        }
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

function howAttractedIsLoisLaneToMe() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return math.floor((math.random() * 10) + 1);
}

consol.log(howAttractedIsLoisLaneToMe());

var clarkKent = true;
var superman = false;

while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}