function Board(x,y){
	this.x = x;
	this.y = y;
	this.board = Array(this.x);
	for(var i = 0; i < this.y; i++){
		this.board[i] = new Array(this.y);
	}
}

