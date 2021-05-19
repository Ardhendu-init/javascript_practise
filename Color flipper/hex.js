const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

document.addEventListener("click",function(){
    let hexcolor = "#"
    for( let i=0; i<6 ;i++){
        hexcolor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;


})

function getRandomNumber(){
    return Math.floor(Math.random() *hex.length );
}