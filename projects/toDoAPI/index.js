const todoList = document.getElementById("todo-list");
axios.get("https://api.vschool.io/will/todo/").then(function(response){
    response.data.forEach(function(todo){
        todoList.innerHTML += `<li>${todo.title}</li>`
    })
        
    });

axios.post('https://api.vschool.io/suzan/todo/'), newTodo).then(function(response){
    
})
//goal:
//display all the tools form the api
//inputs - add new todo items to the list
//should be able to refresh and see the new items
//