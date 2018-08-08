function Board() {
  this.paddle1 = new Paddle(40, 250, 1)
  this.paddle2 = new Paddle(840, 250, 2)
  this.ball = new Ball(440, 290, this.paddle1, this.paddle2)
 }

Board.prototype.start = function(){
  this.paddle1.restart(40, 250, 0, 1)
  this.paddle2.restart(840, 250, 0, 2)
  this.ball.restart(440, 290, this.paddle1, this.paddle2)
};

Board.prototype.checkGame = function(){
  //revisar si hemos ganado o perdido
};

Board.prototype.stop = function(){
 //parar el juego
  };

Board.prototype.restart = function(){
  this.paddle1.restart(40, 250, this.paddle1.score, 1)
  this.paddle2.restart(840, 250, this.paddle2.score, 2)
  this.ball.restart(440, 290, this.paddle1, this.paddle2)
};

Board.prototype.gameOver = function(){
  //el juego se ha acabado
};
