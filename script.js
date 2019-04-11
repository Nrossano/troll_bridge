// Script for troll game, 12/17/18

"use strict";

// Function to handle game mechanics
function trollBattle() {
	document.getElementById("result1").innerHTML = "";
	document.getElementById("result2").innerHTML = "";
	var action = window.prompt("You're walking along, minding your own business and a troll suddenly appears! Do you RUN for your life, FIGHT the troll, or BRIBE the troll?").toUpperCase();

	// Switch statement to handle the initial action of the user

	switch(action) {
		case "RUN":
			var speed = window.prompt("Are you fast? (YES or NO)").toUpperCase();
			if(speed === "YES")  {
					document.getElementById("result1").innerHTML = "Your speed has saved you. You live to fight another day! <em>But can you live with your cowardice?</em>";
			} else { document.getElementById("result1").innerHTML = "You coward, if you choose to run at least make sure you are faster than a troll!</br><strong>You have died!</strong>";

			}
		break;

		case "FIGHT":
			var strong = window.prompt("Wow, how brave! Are you strong? (YES or NO)").toUpperCase();
			var skill = window.prompt("Are you also skilled at fighting? (YES or NO)").toUpperCase();
			if(strong === "YES" || skill === "YES"){
				document.getElementById("result1").innerHTML = "You can be either stronger or more skilled to survive a troll fight.<br/><strong>You Win!</strong>";

			} else {
				document.getElementById("result2").innerHTML = "You are not strong or killed. You shouldn't pick fights with trolls!<br/><strong>You have died!</strong>";
			}
		break;

		case "BRIBE":
			var money = window.prompt("You have to pay the troll toll, do you have enough money? (YES or NO)").toUpperCase();
			var dollars = window.prompt("How much money are you carrying?");
			dollars = parseInt(dollars);
			if(money === "YES" && dollars >= 50) {
				document.getElementById("result1").innerHTML = "You paid the troll toll.<br/> You Win!";

			} else {
				document.getElementById("result2").innerHTML = "You couldn't pay the troll toll.<br/><strong>You have died!</strong>";
			}
		break;

		default: window.alert("Please type RUN, FIGHT, or BRIBE to play the game")
		trollBattle();
	} // end of switch
}

document.getElementById("button").addEventListener("click", trollBattle);
