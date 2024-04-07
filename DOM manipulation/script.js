var incBtn = document.querySelector("#increment");
var decBtn = document.querySelector("#decrement");
var clrBtn = document.querySelector("#clear")

var inc = 0;

incBtn.addEventListener("click",function(){
    inc++;
    document.querySelector(".normal").innerHTML = "Your Current Count is : " + inc;
    document.querySelector(".error").innerHTML = "";
})

decBtn.addEventListener("click",function(){
    if(inc > 0){
        inc--;
        document.querySelector(".normal").innerHTML = "Your Current Count is : " + inc;
    }
    else{
        inc = 0;
        document.querySelector(".error").innerHTML = "Error cannot go below 0";
    }
})

clrBtn.addEventListener("click",function(){
    document.querySelector(".error").innerHTML = "";
    document.querySelector(".normal").innerHTML = "";
})