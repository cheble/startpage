var focused = 1; // It's global so I can save it and then use it when I quit the search bar.

window.onfocus = function(){document.getElementById(focused).focus();}; // Focus at start and when window is focused again.

window.onclick = function(e){
	if ( document.activeElement.id != "search" ) {
		document.getElementById(focused).focus();
	}
};

document.getElementById("search").onblur = function(){ // Unfocusing search bar
	document.getElementById(focused).focus();
	document.getElementById("escape").style.opacity = 0;
	document.getElementById("blackout").style.opacity = 0;
	document.getElementById("blackout").style.pointerEvents = "none";
	document.getElementById("liveClock").style.color = '';
	document.getElementById("search").value = '';
};
document.getElementById("search").onfocus = function(){ // Focusing search bar
	document.getElementById("escape").style.opacity = .7;
	document.getElementById("blackout").style.opacity = .3;
	document.getElementById("blackout").style.pointerEvents = "all";
	document.getElementById("liveClock").style.color = "#60B48A";
};

function helpToggle(){ // Toggle instructions opacity to show/hide
	if ( document.getElementById("instructions").style.opacity < .9 ) {
		document.getElementById("instructions").style.opacity = .9;
		document.getElementById("instructionsToggle").style.opacity = 1;
	} else {
		document.getElementById("instructions").style.opacity = 0;
		document.getElementById("instructionsToggle").style.opacity = '';
	}
}

document.onkeydown = function(e) {

	var key = e.keyCode;

	if ( document.activeElement.id == "search" ) { // If search bar and key [ESC], go back to blocks.
		if ( key == 27 ) {
			document.getElementById("search").value = '';
			document.activeElement.blur();
			document.getElementById(focused).focus();
		}
		return;
	}

	if (!document.activeElement.id) {
		// Keys for help and search still working even if no block selected, if it's another key, then select last block.
		if ( key == 32 ) { // Key space, focus search bar and show [ESP] instruction.
			document.getElementById("search").focus();
		} else if ( key == 72 ) { // H key, toggle instructions.
			helpToggle();
		} else {
			document.getElementById(focused).focus();
		}
		return;
	}

		/*	Mapped keys:    [ESC]               <---- Go back to blocks
		 *                        [w/^]
		 *                  [a/<] [s/v] [d/>]   <---- Move between blocks
		 *                  [     space     ]   <---- Focus search
		 *
		 * (Yes I use arrow keys in vim whats the problem ;-; I'll maybe add hjkl later)
		 */

	var result = null;

	if ( key == 32 ) { // Key space, focus search bar and show [ESP] instruction.
		result = "search"
	} else if ( key == 72 ) { // H key, toggle instructions.
		helpToggle();
	} else if ( key == 38 || key == 87) { // Up key, go back 4 blocks (the one above).
		result = parseInt(focused) - 4;
		focused = parseInt(focused) - 4;
		if (result < 1) {
			result += 8;
			focused += 8;
		}
		result = !isNaN(document.activeElement.id) ? result : focused;
	} else if ( key == 40 || key == 83 ) { // Down key, go forward 4 blocks (the one below).
		result = parseInt(focused) + 4;
		focused = parseInt(focused) + 4;
		if (result > 8) {
			result -= 8;
			focused -= 8;
		}
		result = !isNaN(document.activeElement.id) ? result : focused;
	} else if ( key == 39 || key == 68 ) { // Right key, go forward 1 block or reset row if end.
		result = focused == 4 ? parseInt(focused) - 3 : parseInt(focused) + 1;
		focused = focused == 4 ? parseInt(focused) - 3 : parseInt(focused) + 1;
		if (result > 8) {
			result -= 4;
			focused -= 4;
		}
		result = !isNaN(document.activeElement.id) ? result : focused;
	} else if ( key == 37 || key == 65 ) { // left key, go back 1 block or reset row if end.
		result = focused == 5 ? parseInt(focused) + 3 : parseInt(focused) - 1;
		focused = focused == 5 ? parseInt(focused) + 3 : parseInt(focused) - 1;
		if (result < 1) {
			result += 4;
			focused += 4;
		}
		result = !isNaN(document.activeElement.id) ? result : focused;
	}
	if (result) {
		document.getElementById(String(result)).focus();
	}
};
