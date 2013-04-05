function Ship(name,len,color){
	this.name = name;
	this.len = len;
	this.color = color;
	this.posX = 0;
	this.posY =0;
}

function Game(Battleships,Cruisers,Frigates,Minesweepers){

	this.board = new Board(20,20);

	this.ships = new Array();
	
	var i = 0;
	for (; i<Battleships; i++){
		ships[i] = new Ship("Battleship",5,"red");
	}

	for (; i<Cruisers; i++){
		ships[i] = new Ship("Cruiser",4,"red");
	}

	for (; i<Frigates; i++){
		ships[i] = new Ship("Frigate",3,"red");
	}

	for (; i<Minesweepers; i++){
		ships[i] = new Ship("Minesweeper",2,"red");
	}
	this.shipPositions = Positions;
}

function Positions(){
	
	var posX = 0;
	var posY = 0;

	var rows = new Array();
	for(var i=0; i<this.board.x; i++){
		rows[i] = 0;
	}

	for(var i=0; i<this.ships.length; i++){
		posY = Math.floor((Math.random()*(this.board.y-this.ships[i].length)));

		var j = Math.floor((Math.random()*this.board.x));
		while(rows[j] != 0){
			j = Math.floor((Math.random()*this.board.x));
		}
		rows[j] = 1;
		posX = j;

		this.ships[i].posX = posX;
		this.ships[i].posY = posY;
	}
}

function startGame(){
	var game = new Game(1,2,4,4);
	game.shipPositions();

	var canvas = document.getElementById("boardCanvas");
	//canvas.addEventListener("click", canvasClick, false);

	var context = canvas.getContext("2d");
	//context.fillRect(10,10,100,100);


	for(var i = 0; i < game.board.x; i++){
		for(var j = 0; j < game.board.y; j++){
			/*if ((i+j)%2 == 0){
				context.fillStyle = "0099FF";
			}else{
				context.fillStyle = "white";
			}*/
			context.fillStyle = "0099FF";
			context.fillRect((25*i)+1, (25*j)+1, 23, 23);
		}
	}

	for(var i = 0; i < game.ships.length; i++){
		context.fillRect(25*game.ships[i].posX, 25*game.ships[i].posY, 1, game.ships[i].len);
	}

	var turn = Math.floor((Math.random()*2)+1);
	var currentplayer = turn;
	alert("the game has started. Player " + currentplayer + "'s turn");
}