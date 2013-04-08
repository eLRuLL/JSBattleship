window.onload = init;
var game;
var colors = ["black","red","lightblue","white"];

pixelSize = 25;

function init(){

	var startGameButton = document.getElementById("startGame");
	startGameButton.onclick = startGame;


	var canvas = document.getElementById("boardCanvas");
	canvas.addEventListener("click", canvasClick, false);

	var context = canvas.getContext("2d");
	//context.fillRect(10,10,100,100);

	game = new Game(1,2,4,4,context);
	
//	context.fillStyle = "red";
//	context.fillRect(25*10, 25*10, 25, 5*25);
	
}

function startGame(){
	//game.players[0].shipPositions();
	game.players[0].drawBoard();
	alert("these are your current positions");
	game.clearCanvas();
	game.players[1].drawHideBoard();
	var startGameButton = document.getElementById("startGame");
	startGameButton.style.visibility="hidden";

	var mydiv = document.getElementById("myContainer");
	mydiv.innerHTML = "Start Playing. Click a point in the canvas.";

	//game.drawShips();
}


function canvasClick(e){
	var mydiv = document.getElementById("myContainer");
	mydiv.innerHTML = "";

	canvas_x = e.offsetX;
	canvas_y = e.offsetY;

	board_x = Math.floor(canvas_x / pixelSize);
	board_y = Math.floor(canvas_y / pixelSize);


	if(game.current_player == 0){
		
		game.clearCanvas();

		game.current_player = (game.current_player+1)%2;

		var flag = true;

		for(var i=0; i<game.players[game.current_player].ships.length; i++){
			if(game.players[game.current_player].ships[i].hit(board_x,board_y)){
				game.players[game.current_player].board.board[board_x][board_y] = 0;
				flag = false;
				mydiv.innerHTML += "<p>";
				mydiv.innerHTML += "Great! You hit the computer";
				mydiv.innerHTML += "</p>";
				break;
			}
		}
		if(flag){
			game.players[game.current_player].board.board[board_x][board_y] = 3;
		}
		game.players[game.current_player].drawHideBoard();
		mydiv.innerHTML += "Computer's Turn! (click anywhere)";
	}else{
		if(game.current_player == 1){

			game.current_player = (game.current_player+1)%2;

			var computer_x = Math.floor((Math.random()*game.dimension));
			var computer_y = Math.floor((Math.random()*game.dimension));


			while(game.players[game.current_player].board.board[computer_x][computer_y] == 0 || game.players[game.current_player].board.board[computer_x][computer_y] == 3){
				computer_x = Math.floor((Math.random()*game.dimension));
				computer_y = Math.floor((Math.random()*game.dimension));
			}

			game.clearCanvas();
			//game.players[game.current_player].drawBoard();

			var flag = true;

			for(var i=0; i<game.players[game.current_player].ships.length; i++){
				if(game.players[game.current_player].ships[i].hit(computer_x,computer_y)){
					game.players[game.current_player].board.board[computer_x][computer_y] = 0;
					flag = false;

					mydiv.innerHTML += "<p>";
					mydiv.innerHTML += "Ouch! The computer hit you";
					mydiv.innerHTML += "</p>";
					break;
				}
			}
			if(flag){
				game.players[game.current_player].board.board[computer_x][computer_y] = 3;
			}
			game.players[game.current_player].drawBoard()

			game.current_player = -1;
			mydiv.innerHTML += "The Computer has played! (click anywhere)";
		}else{
			if(game.current_player == -1){
				game.clearCanvas();
				game.current_player = 0;
				game.players[1].drawHideBoard();
				mydiv.innerHTML = "Your Turn!";
			}
		}
	}
	var winner = game.gameover();
	if(winner >= 0){
		var mydiv = document.getElementById("myContainer");
		mydiv.innerHTML = "GAME OVER!";
		mydiv.innerHTML += "<p>";
		if(winner == 0){
			mydiv.innerHTML += "CONGRATULATIONS, YOU WON!"
		}else{
			mydiv.innerHTML += "WHAT A SHAME!, YOU LOST!";
		}
		mydiv.innerHTML += "</p>";
	}
}
