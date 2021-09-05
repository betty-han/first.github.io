
const h1 = document.querySelector("#clock");

function clock(){
    
    const now = new Date();    
    options = {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false        
      };      
    h1.innerText  =now.toLocaleDateString("ko-KR", options);
}

clock();
setInterval(clock, 1000);
