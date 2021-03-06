
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var RGBarray = [];

init();

//Design Patterns in the future
//ways of structuring code	
//module design pattern, uses objects instead
function init(){
	setupModeButtons();
	setupSquares();	
	reset();
}


function setupModeButtons(){
	//mode button event listeners
	for(var i =0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();

		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		//compare color to picked color
		console.log("Clicked: "+ clickedColor+ ", Picked: "+pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});

	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	
	colorDisplay.textContent = pickedColor + " \n "+convertToHex(RGBarray[0],RGBarray[1],RGBarray[2]);

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];	
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Color";
	RGBarray = [];
}

resetButton.addEventListener("click", function(){
	reset();
});




function changeColors(color){
	//loop thru squares, change each color to match given color
	for(var i = 0; i < colors.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	var temp = colors[random].split(',');
	var red = temp[0].split('(')[1];
	var green = temp[1];
	var blue = temp[2].substring(0,temp[2].length-1);
	RGBarray.push(red);
	RGBarray.push(green);
	RGBarray.push(blue);
	return colors[random];
}

function generateRandomColors(number_of_colors){
	var arr = [];

	for(var i = 0; i < number_of_colors; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//pick a red from 0-255
	var red = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var green = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var blue = Math.floor(Math.random() * 256);
	var rgbstring = "rgb(" + red + ", " + green + ", " + blue + ")";
	return rgbstring;
}
function componentToHex(c){
	var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function convertToHex(r,g,b){
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}