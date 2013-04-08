

function Game(Battleships,Cruisers,Frigates,Minesweepers,context){

	this.context = context;
	
	this.players = new Array();
	this.dimension = 20;

	this.players[0] = new Player(Battleships,Cruisers,Frigates,Minesweepers,this.dimension,context);
	this.players[1] = new Player(Battleships,Cruisers,Frigates,Minesweepers,this.dimension,context);
	this.current_player = 0;

}

Game.prototype.gameover = function(){
	for(var i=0; i<this.players.length; i++){
		if(this.players[i].availablePositions() == 0){
			return i;
		}
	}
	return -1;
}

Game.prototype.clearCanvas = function(){
	this.context.clearRect(0,0,500,500);
}
