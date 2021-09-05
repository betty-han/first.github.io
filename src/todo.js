const formTodo = document.querySelector("#todo-form");
const inputTodo = formTodo.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODO_KEY = "todos";
const storageTodos = window.localStorage.getItem(TODO_KEY);

let toDos = [];

function saveTodos(){
    window.localStorage.setItem(TODO_KEY, JSON.stringify(toDos));    
}

function handleSubmitTodo(e){
    e.preventDefault();        

    const todo = inputTodo.value
    inputTodo.value = "";

    const todoObj = {
        user: userName,        
        text: todo, 
        id: Date.now()
    }
    toDos.push(todoObj);        

    showTodos(todoObj);
    saveTodos();        
}


function removeTodo(e){
    const li = e.target.parentElement;    
    toDos = toDos.filter(item => item.id !== Number(li.id)) ;    
    li.remove(); 
    saveTodos();
}

function showTodos(todoObj){
    
    const li = document.createElement("li");
    li.id = todoObj.id;

    const span = document.createElement("span");
    span.innerText = todoObj.text;

    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", removeTodo);

    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);        
}


if(storageTodos){
    const parseTodos = JSON.parse(storageTodos).filter(item => item.user === userName);    
    toDos = parseTodos;
    parseTodos.forEach(showTodos);
}

formTodo.addEventListener("submit", handleSubmitTodo);



