let a;
let timer
let date
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
var myString = "Mihir shuhd ehdfuv jdifj"
myString.padEnd
setInterval(timer =()=>{
    a=new Date();
    timer = a.getHours().toString().padStart(2,"0") +":"+a.getMinutes().toString().padStart(2,"0") +":"+a.getSeconds().toString().padStart(2,"0")
    date = a.toLocaleDateString(undefined,options)
    document.getElementById('time').innerHTML = timer
    document.getElementById('day').innerHTML = date
},1000)