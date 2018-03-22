var axios = require("axios");
axios.get("https://swapi.co/api/people").then(function(){
    console.log("I'm done");
});

for (var i = 0; i < 10; i++){
    console.log(i);
}