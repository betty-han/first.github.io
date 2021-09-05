const API_KEY = "38025ad194c90407d1c3ae365c726e98";

function success(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;    
    
    fetch(weatherUrl)
        .then( res => res.json())
        .then( data => {
            console.log(data);
            
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;                                  
        });

}

function error(){
    console.log("err");
}

function callApi(){
    
}

navigator.geolocation.getCurrentPosition(success, error);