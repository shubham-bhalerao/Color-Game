var noOfSquares=6;
var colors;
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector(".colorDisplay");
var h1=document.querySelector("h1");
var reset=document.querySelector(".reset");
var msg=document.querySelector(".msg");
var modes=document.querySelectorAll(".mode");


init();

function init()
{
	resetFun(noOfSquares);
	setButtons();
	setSquares();
}

function setSquares()
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].addEventListener("click",function()
		{
			var clickedColor=this.style.background;
			if(clickedColor==pickedColor)
			{
				h1.style.background=pickedColor;
				colorAllByPickedColor(noOfSquares);
				msg.textContent="Correct!";
				reset.textContent="Play Again?"
			}
			else
			{
				this.style.background="#232323";
				msg.textContent="Try Again";
			}
		});
	}
}

function setButtons()
{
	for(var i=0;i<modes.length;i++)
	{
		modes[i].addEventListener("click",function()
		{
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent==="Easy"?noOfSquares=3:noOfSquares=6;
			resetFun(noOfSquares);
		});
	}
}

reset.addEventListener("click", function()
{
	resetFun(noOfSquares);
});

function colorAllByPickedColor(noOfSquares)
{
	for(var i=0;i<noOfSquares;i++)
	{
		squares[i].style.background=pickedColor;
	}
}

function randomColorNumber()
{
	var random=Math.floor(Math.random()*noOfSquares);
	return colors[random];
}

function generateRandomColors(noOfSquares)
{
	var arr=[];
	for(var i=0;i<noOfSquares;i++)
	{
		arr[i]=randomColor();
	}
	return arr;
}

function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return("rgb("+r+", "+g+", "+b+")");
}

function resetFun(noOfSquares)
{
	colors=generateRandomColors(noOfSquares);
	pickedColor=randomColorNumber();
	for(var i=0;i<noOfSquares;i++)
	{
		squares[i].style.background=colors[i];
	}
	if(noOfSquares==3)
	{
		for(var i=3;i<6;i++)
		{	
			squares[i].style.background="#232323";
			//tryAgainBug
			squares[i].addEventListener("click",function()
			{
				msg.textContent="";
			});
		}
	}
	colorDisplay.textContent=pickedColor;
	h1.style.background="steelblue";
	msg.textContent="";
	reset.textContent="New Colors";
}