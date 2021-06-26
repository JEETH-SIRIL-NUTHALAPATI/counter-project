let value = document.getElementById("value");

let add = document.getElementById("add");

let sub = document.getElementById("cut")



sub.addEventListener("click", function(){
    value.innerHTML = value.innerHTML - 1;
    if(value.innerHTML < 0)value.style.color = "red";
    if(value.innerHTML == 0) value.style.color = "black";

})

add.addEventListener("click", function(){
    value.innerHTML = value.innerHTML - (-1);
    if(value.innerHTML > 0)value.style.color = "green";
    if(value.innerHTML == 0) value.style.color = "black";

})