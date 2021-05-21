for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var letter = this.innerHTML;
    // console.log(letter);
    makeSound(letter);
    animation(letter);
   
    
  })
}
document.addEventListener("keypress",function(e){
  makeSound(e.key);
  animation(e.key);
})
function makeSound(key){
    switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "k":
          var kick_bass = new Audio("sounds/kick-bass.mp3");
          kick_bass.play();
          break;
        case "l":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
  
        default:
            console.log("This "+letter+"is not available");
          break;
      }
}

function animation(keyId){
  var keyStyle = document.querySelector("."+keyId);
  keyStyle.classList.add("pressed");
  setTimeout(function(){keyStyle.classList.remove("pressed");},100)
}
