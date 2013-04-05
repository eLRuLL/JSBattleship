window.onload = init;

function init(){
	var startGameButton = document.getElementById("startGame");
	startGameButton.onclick = startGame;

	var fillShipsButton = document.getElementById("fillShips");
	fillShipsButton.onclick = fillShips;

	var board = new Board(20,20);
	var canvas = document.getElementById("boardCanvas");
	canvas.addEventListener("click", canvasClick, false);

	var context = canvas.getContext("2d");
	//context.fillRect(10,10,100,100);


	for(var i = 0; i < board.x; i++){
		for(var j = 0; j < board.y; j++){
			/*if ((i+j)%2 == 0){
				context.fillStyle = "0099FF";
			}else{
				context.fillStyle = "white";
			}*/
			context.fillStyle = "0099FF";
			context.fillRect((25*i)+1, (25*j)+1,23,23);
		}
	}


	context.fillStyle = "red";
	context.fillRect(25*10, 25*10, 25, 5*25);
	
}

function fillShips(){

}


function canvasClick(e){
	canvas_x = e.offsetX;
	canvas_y = e.offsetY;

	alert("X=" + canvas_x + ",Y=" +canvas_y);
}