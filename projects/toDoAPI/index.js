const todoUrl = "https://api.vschool.io/will/todo/";
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");

function createTodoProperty(elem, text){
    var prop = document.createElement(elem); 
    prop.innerHTML = text; 
    return prop; 
}; 


function createTodoInfo(todo, parent){
    parent.appendChild(createTodoProperty("h3", todo.title)); 
    parent.appendChild(createTodoProperty("p", todo.description)); 
    parent.appendChild(createTodoProperty("p", todo.price));
    // parent.appendChild(createTodoImage(todo.imgUrl)); 
}

function addToDom(todo){
    const { title, description, price, _id, imgUrl, completed } = todo
    const li = document.createElement("li"); 
    li.id = todo._id; 

    let button = document.createElement("button"); 
    button.innerText = "Delete"; 
    button.addEventListener("click", function (e){
        axios.delete(todoUrl + todo._id).then(function (response){
            todoList.removeChild(li)
        });
    });
    
    // let imageInput = document.createElement("input"); 
    // imageInput.type="text";
    // imageInput.placeholder = "Type image URL Name Here"
    // imageInput.src= imageInput.value;

    let img = document.createElement("img"); 
    img.setAttribute("src", imgUrl); 

    let input = document.createElement("input"); 
    input.type = "checkbox"; 
    input.classList.add("checkbox")
    input.id = todo.id + "completed";
    input.checked = todo.completed;
    
    let label = document.createElement("label"); 
    label.innerText = "Completed"; 
    label.htmlFor = input.id; 
    checkOff(li, todo.completed); 

    input.addEventListener("change", function (e){
    let checked = e.target.checked; 
    axios.put(todoUrl+todo._id, {completed: checked}).then(function (response) {
        checkOff(li, checked);
        }); 
    }); 

const newDiv = document.createElement("div")
    newDiv.classList.add("userinput")
    label.appendChild(input)
    newDiv.appendChild(img);
    newDiv.appendChild(label)
    newDiv.appendChild(button)
    createTodoInfo(todo, li);
    li.appendChild(newDiv);
    todoList.appendChild(li);
};

function checkOff(label, checked){
    if (checked) {
        label.style.textDecoration = "line-through"; 
    } else{
        label.style.textDecoration = "none"; 
    }
}

axios.get(todoUrl).then(function (response){
    let todos = response.data; 
    for (var i = 0 ; i < todos.length; i++){
    let todo = todos[i]; 
    addToDom(todo);
    }
})

const data = {}; 

todoForm.addEventListener("submit", function (e){
    e.preventDefault(); 
    data.title = e.target.title.value
    data.description = e.target.description.value;
    data.price = e.target.price.value; 
    data.imgUrl = e.target.imgUrl.value; 
    axios.post (todoUrl, data).then(function (response){
        let todo = response.data; 
        addToDom (todo); 
    todoForm.reset()
    }); 
}); 