//write a constructor function
var Enemy = function(){
    this.type = getRandomType();
    this.hitPoints = this.genHitPoints();
    this.defense = this.hitPoints * 3;

}

    
function getRandomType(){
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"]
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randIndex];
}

Enemy.prototype.genHitPoints = function(){
    switch(this.type){
        case "Ancient Dragon":
            return Math.floor(Math.random() * 21 + 80);
        case "Prowler":
            return Math.floor(Math.random() * 30 + 50);
        case "Mighty Grunt":
        return Math.floor(Math.random() * 30 + 20);
    }
}
function printEnemies(){
    for (var i = 0; i < 5; i++){
        console.log(new Enemy());
    }
}

printEnemies();