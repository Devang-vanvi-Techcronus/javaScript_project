let count = document.getElementById('counter')
let inc = document.getElementById("increase")
let dec = document.getElementById("decrease")
let Reset = document.getElementById("reset")
let counter = 0

inc.addEventListener("click", ()=>{
   count.innerHTML = counter++;
}
);

dec.addEventListener("click", ()=>{
    count.innerHTML = counter--;
 }
 );

Reset.addEventListener("click", ()=>{
    count.innerHTML = 0;
 }
 );

 


























































































