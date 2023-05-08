// JavaScript Document
console.log("Howdy!");

/***********************/
/* SOUND ON/OFF BUTTON */
/***********************/

// Dit heb ik afgekeken bij een eerder project die ik heb gedaan: https://github.com/JuliaHop2003/FvD/blob/main/opdracht2/scripts/index.js

const onOffButton = document.querySelector(".musicButton");

function playMusic(event) {
    const marioAudio = document.querySelector("audio");

    if (marioAudio.paused) {
        marioAudio.play();

        onOffButton.innerHTML = "Music off"
    }
    else {
        marioAudio.pause();
        onOffButton.innerHTML = "Music on"
    }
} 

onOffButton.addEventListener("click", playMusic);





/********/
/* 1983 */
/********/

var button1983 = document.querySelector(".questionmark1983");
var mario = document.querySelector(".mario");
var title = document.querySelector("h1");
var paragraph = document.querySelector("p");

function move1983() {
    title.innerHTML = "Mario Bros (1983)";
    paragraph.innerHTML = "This was an arcade style game, you could either play 1v1 battle mode vs. your brother Luigi. Or you could play on a multi-height level, with 2 pipes at the top, where a unlimited amount of turtles and other assorted enemies would descend upon you, the aim was to get the highest score (by killing more and more enemies). This was the first game in which Mario was a Plumber and saw the introduction of his brother, Luigi.";

    mario.className = "mario1983";
    document.querySelector(".mario1983").src="images/mario1983.png";

    button1983.classList.add("changed");
}

button1983.addEventListener("click", move1983);





/********/
/* 1988 */
/********/

var button1988 = document.querySelector(".questionmark1988");
var goomba = document.querySelector(".goomba1");

function move1988() {
    title.innerHTML = "Super Mario Bros 2 (1988)";
    paragraph.innerHTML = "This was not originally a Mario game, it was once called Doki Doki Panic, all Nintendo did was simply replace the four players from Doki Doki Panic and insert the Super Mario Bros and their buddies Toad and Princess as playable characters. Simple as that, this was the only game to feature Wart as the main boss. Mario uses vegetables and potions to defeat his foes in this game as opposed to the classic mushrooms and fire-flowers etc. You had the option to play as Princess Toadstool, Toad and Luigi too.";
   
    mario.className = "mario1988";
    document.querySelector(".mario1988").src="images/mario1988.png";

    button1988.classList.add("changed");
    goomba.classList.add("goomba1go");
}

button1988.addEventListener("click", move1988);




/********/
/* 1989 */
/********/

var button1989 = document.querySelector(".questionmark1989");
var star1 = document.querySelector(".star1");

function move1989() {
    title.innerHTML = "Super Mario Bros 3 (1989)";
    paragraph.innerHTML = "Another of the Princess Toadstool rescuing platformers, this one however outsold any platform game in the world, even Super Mario World (Which imo is better). You play Mario (or Mario & Luigi in 2 player) trying to track down Bowser, you must also return the Wands of Power that control each lands to there Kings by defeating the Koopa Kids.";

    mario.className = "mario1989";
    document.querySelector(".mario1989").src="images/mario1989.png";


    button1989.classList.add("changed");
    star1.classList.add("star1go");
}

button1989.addEventListener("click", move1989);




/********/
/* 1991 */
/********/

var button1991 = document.querySelector(".questionmark1991");
var coin1 = document.querySelector(".coin1");
var coin2 = document.querySelector(".coin2");

function move1991() {
    title.innerHTML = "Super Mario World (1991)";
    paragraph.innerHTML = "The first Mario game & the launch title for the Super Nintendo saw another kidnap of poor old Princess Toadstool, This adventure however is not set in the Mushroom Kingdom, Mario is in Dinosaur Land taking a hard earned vacation after the events of Super Mario Bros. 3. Dinosaur Land consists of several playable zones including Yoshi's Island, Donut Plains, The Bridge areas, Vanilla Dome, Star Land, The Forest of Illusion, Chocolate Island, a Sunken Ship, and finally the Valley of Bowser and featured a scrollable World Map.";

    mario.className = "mario1991";
    document.querySelector(".mario1991").src="images/mario1991.png";

    button1991.classList.add("changed");
    coin1.classList.add("coin1go");
    coin2.classList.add("coin2go");
}

button1991.addEventListener("click", move1991);




/********/
/* 1996 */
/********/

var button1996 = document.querySelector(".questionmark1996");
var coin3 = document.querySelector(".coin3");
var coin4 = document.querySelector(".coin4");

function move1996() {
    title.innerHTML = "Super Mario 64 (1996)";
    paragraph.innerHTML = "Super Mario 64 debuted in 1996 for the Nintendo 64, propelling the world’s favorite plumber back into the limelight. This time he had to battle the nefarious Bowser across all manner of landscapes as Bowser once again kidnapped Princess Peach. This time he imprisons Peach and the denizens of her castle in over one hundred star worlds that Mario must fight through to free them. With each person saved, Mario unlocks new worlds and areas where he can receive hints, power-ups, and the appreciation of those he rescues.";

    mario.className = "mario1996";
    document.querySelector(".mario1996").src="images/mario1996.png";

    button1996.classList.add("changed");
    coin3.classList.add("coin3go");
    coin4.classList.add("coin4go");
}

button1996.addEventListener("click", move1996);





/********/
/* 2002 */
/********/

var button2002 = document.querySelector(".questionmark2002");
var goomba2 = document.querySelector(".goomba2");

function move2002() {
    title.innerHTML = "Super Mario Sunshine (2002)";
    paragraph.innerHTML = "Super Mario Sunshine was the next major Mario game to be released, but this time it was on the Gamecube. Although the unique controller for the system put some people off initially, the originality eventually drew people to this installation in droves. The premise of Super Mario Sunshine was that Shadow Mario, our hero’s doppelganger, was polluting the beautiful island of Isla Delfino, a paradise where the Mario gang happens to be taking their vacation. After Mario is arrested and charged with the crimes of Shadow Mario, it is up to him to use the FLUDD technology in order to clean the island.";

    mario.className = "mario2002";
    document.querySelector(".mario2002").src="images/mario2002.png";

    button2002.classList.add("changed");
    goomba2.classList.add("goomba2go");
}

button2002.addEventListener("click", move2002);





/********/
/* 2006 */
/********/

var button2006 = document.querySelector(".questionmark2006");
var star2 = document.querySelector(".star2");

function move2006() {
    title.innerHTML = "New Super Mario Bros (2006)";
    paragraph.innerHTML = "The period of time between 2006 to the present day has been filled with a variety of brand new Mario games. In New Super Mario Bros, Bowser Jr. returns again to kidnap Peach and lead Mario on a quest through eight worlds in the Mushroom Kingdom. This game was an incredible homage to the Super Nintendo version of Mario, blending old and new styles to produce a great title in its own right.";

    mario.className = "mario2006";
    document.querySelector(".mario2006").src="images/mario2006.png";

    button2006.classList.add("changed");
    star2.classList.add("star2go");
}

button2006.addEventListener("click", move2006);




/********/
/* 2007 */
/********/

var button2007 = document.querySelector(".questionmark2007");
var goomba3 = document.querySelector(".goomba3");
var star3 = document.querySelector(".star3");

function move2007() {
    title.innerHTML = "Super Mario Galaxy (2007)";
    paragraph.innerHTML = "One of the most notable games that have been released in this period was Super Mario Galaxy, which took many gamers by surprise for its bold new direction. Bowser returns once again and launches the Mushroom Castle into space, and out of Mario’s reach. In order to reach her again, Mario must travel throughout galaxies to obtain Power Stars so that he can power an observatory to get to Princess Peach.";

    mario.className = "mario2007";
    document.querySelector(".mario2007").src="images/mario2007.png";

    button2007.classList.add("changed");
    goomba3.classList.add("goomba3go");
    star3.classList.add("star3go");
}

button2007.addEventListener("click", move2007);

// Text source: https://www.superluigibros.com/evolution-of-mario