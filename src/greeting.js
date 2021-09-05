
const formLogin = document.querySelector("#login-form");
const id = formLogin.querySelector("input");

const greeting = document.querySelector("#greeting");
const greetingH2 = greeting.querySelector("h2");

let userName = window.localStorage.getItem("user");

function handleSubmit(e){
    e.preventDefault();    

    const user = id.value;
    id.value = "";
    userName = user;

    showGreeting();    
    saveUserName();
}

function saveUserName(){
    window.localStorage.setItem("user", userName);
}

function showGreeting(){    
    
    const className = "hidden";    
    formLogin.classList.add(className);
    greeting.classList.remove("hidden");         

    greetingH2.innerText = userName;    
}

if(userName){
    showGreeting();
}

formLogin.addEventListener("submit", handleSubmit);