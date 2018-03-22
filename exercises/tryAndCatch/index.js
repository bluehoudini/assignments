
// var myName = "John Doe";
// console.log(myName); 

// try{
// function movieCheck(age) {  
//     if(age < 0) {
//       throw "Error cannot be less than 0";
//     } else if(age <= 12) {
//       console.log("You can see PG movies");
//     } else if(age >= 13 && age < 18) {
//       console.log("You can see PG-13 movies");
//     } else if(age >= 18) {
//       console.log("You can see R rated movies");
//     }
//   }
//   movieCheck(-1); 
// }catch(err){
// console.log(err);
// } 

// function sum(x, y){  
  //check data types first and throw error
//   if(typeof x !== "number" || typeof y !=="number"){
//     throw "input must be a number"
//   }
//   return x + y;
// }
// try{
//   sum("1", "2");
// } catch (err){
//   console.log(err);
// }
var user = {username: "sam", password: "123abc"};  
function login(username, password){ 
  if(username || password !== login){
    throw "username or password is incorrect"
  } 
  //check credentials
  console.log()
}