var numsquare = 6;
var colors = generaterandomcolors(numsquare);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
colordisplay.textContent = pickedcolor;

easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numsquare = 3;
	colors = generaterandomcolors(3);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i =0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numsquare = 6
	colors = generaterandomcolors(numsquare);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i =0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
})

reset.addEventListener("click", function(){
	colors = generaterandomcolors(numsquare);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	messagedisplay.textContent = "";
	reset.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];}
	h1.style.background = "steelblue";
});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedcolor = this.style.background;
			if(pickedcolor == clickedcolor){
			reset.textContent="Play Again?"
			messagedisplay.textContent="Correct!";
			h1.style.background = clickedcolor;
			for (var j = 0; j < colors.length; j++) {
				squares[j].style.background = clickedcolor;
			}}
		else{
			this.style.background = "#232323";
			messagedisplay.textContent="Try Again";
		}	
		
    });
}

function pickcolor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}
 function generaterandomcolors(num){
 	var arr=[]
 	for (var i = 0; i < num ; i++) {
 		arr.push(randomcolor())}
 		return arr;
 }

 function randomcolor(){
 	var r= Math.floor(Math.random() * 256);
 	var g= Math.floor(Math.random() * 256);
 	var b= Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + g + ", " + b + ")" ;
 }