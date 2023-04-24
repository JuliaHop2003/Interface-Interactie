// JavaScript Document
console.log("Howdy!");

// 1983
var delayInMilliseconds = 5000; 

setTimeout(function() {
    document.getElementById("titel").innerHTML = "Mario Bros (1983)";
  }, delayInMilliseconds);

setTimeout(function() {
    document.getElementById("paragraaf").innerHTML = "This was an arcade style game, you could either play 1v1 battle mode vs. your brother Luigi. Or you could play on a multi-height level, with 2 pipes at the top, where a unlimited amount of turtles and other assorted enemies would descend upon you, the aim was to get the highest score (by killing more and more enemies). This was the first game in which Mario was a Plumber and saw the introduction of his brother, Luigi. 2 years after Mario Bros came Super Mario Bros which was the first visit to the Mushroom Kingdom, where Mario had gone to rescue a princess in distress, who had been kidnapped by Bowser.";
  }, delayInMilliseconds);

// 1988
// setTimeout(function() {
//     document.getElementById("mario1983").src="images/mario1988.png";
//   }, delayInMilliseconds);

var mario = document.querySelector(".mario");

var button1983 = document.querySelector("#vraagteken2");

button1983.addEventListener("click", move1983);

function move1983() {
    mario.className = "mario1988";
    document.querySelector(".mario1988").src="images/mario1988.png";
}
