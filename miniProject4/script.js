let element=document.getElementById("text");
let interval=setInterval(function(){
    if(Number(element.innerText)==100){
        clearInterval(interval);
    }
    else{
    element.innerText=Number(element.innerText) +1;
    }
},100);