//make a function where when the form is submitted it will alert with the submitted info
var button = document.getElementById("submit");
// console.log(button);
button.addEventListener("submit", function(i){
    i.preventDefault();
    
});

button.addEventListener("click", function(){
    var firstName = document.getElementsByName("firstName")[0].value;
    var lastName = document.getElementsByName("lastName")[0].value;
    var age = document.getElementsByName("age")[0].value;
    var gender = document.getElementById
        if( document.getElementById("gender").checked == true){
        gender = "male"
    } else{
        gender = "female"
    }
    // function findGender{
        
    // }
       
    var destination = document.getElementsByName("destination")[0].value

    var dietRestriction = document.getElementById("diet").checked = "diet";
    alert("First Name:" + firstName + "Last Name:" + lastName +
    "Age:" + age + "Gender:" + gender + "Destination:" + destination +
    "Dietary Restriction:" + dietRestriction);
})

// console.log()
// document.getElementById("travelForm").submit();
// alert.addEventListene()
//submit var get element
//add event listen to alert
