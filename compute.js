function test() {
	

var bplus = document.getElementById("bplus").value;
var bminus = document.getElementById("bminus").value;
var bdivide = document.getElementById("bdivide").value;

var bdec = document.getElementById("bdec").value;
var beval = document.getElementById("beval").value;
var bmult = document.getElementById("bmult").value;

var buttons = document.getElementsByTagName("button"); // Select all buttons
var result = document.getElementsByClassName("screen")[0]; // Select the result-field
var clear = document.getElementsByClassName("clear")[0]; // Select the clearAll-button

  for (var i = 0; i < buttons.length; i += 1) {
    // It will loop through all the buttons to add onclick-event
    // If the inside of that button is NOT '=' --> we will
    // add the onclick-function: addValue(i).
    // If it is '=' --> add the onclick-function: calculate(i)
		var val = buttons[i].value;
		if (buttons[i].value === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else if (buttons[i].value === bplus) {
    	buttons[i].addEventListener("click", operator(bplus));
    }
		else if (buttons[i].value === bminus) {
    	buttons[i].addEventListener("click", operator(bminus));
    }
		else if (buttons[i].value === bdivide) {
    	buttons[i].addEventListener("click", operator(bdivide));
    }
		else if (buttons[i].value === bdec) {
    	buttons[i].addEventListener("click", operator(bdec));
    }
		else if (buttons[i].value === bmult) {
    	buttons[i].addEventListener("click", operator(bmult));
    }
		else if (buttons[i].value === clear) {
			buttons[i].addEventListener("click", clear());
		}
		else {
      buttons[i].addEventListener("click", addValue(val));
		}//end else
	}//end for loop

//inputs numbers into the screen
		function addValue(val) {
		return function () {
			if (result.innerHTML === "Infinity") {
				result.innerHTML = '';
			}else{
        var numbers = result.innerHTML + val;
				result.innerHTML = numbers;
			}//end else
		}//end function
  }//end addValue

//calculates what is in the screen
function calculate(i) {
  return function () {
		result.innerHTML = eval(result.innerHTML);
  }//end return
}//end calculate

//this will clear the screen
clear.onclick = function () {
	result.innerHTML = '';
};

	//adds the operators to the screen
	function operator(x){
		return function(){
		if (x === bplus) {
			result.innerHTML = result.innerHTML +  " " + "+" + " ";
		}else if (x === bminus) {
			result.innerHTML = result.innerHTML + " " + "-" + " ";
		}else if (x === bdivide) {
			result.innerHTML = result.innerHTML + " " + "/" + " ";
		}else if (x === bdec){
		result.innerHTML = result.innerHTML +  "." ;
	}else {
		result.innerHTML = result.innerHTML + " " + "*" + " ";
	}//end else
	}//end return
}//end of operator

}//end onload
