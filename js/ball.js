function Ball(x, y, paddle1, paddle2) {
  this.x = x
  this.y = y
  this.paddle1 = paddle1
  this.paddle2 = paddle2
  this.direction = this.randomDirection()
}

Ball.prototype.randomDirection = function() {
  var directions = ["NW","NE","SE","SW"];
  var randomDirection = Math.floor(Math.random()*directions.length);
  return directions[randomDirection];
};

Ball.prototype.move = function() {
  switch (this.direction) {
    case 'NW':
      this.x -= 5;
      this.y -= 5;
      this.checkCollision();
      break;
    case 'NE':
      this.x += 5;
      this.y -= 5;
      this.checkCollision();
      break;
    case 'SE':
      this.x += 5;
      this.y += 5;
      this.checkCollision();
      break;
    case 'SW':
      this.x -= 5;
      this.y += 5;
      this.checkCollision();
      break;
  }
};
Ball.prototype.checkCollision = function() {
  // Ball hit the top
  if (this.y <= 0) {
    switch (this.direction) {
      case 'NW':
        this.direction = 'SW';
        break;
      case 'NE':
        this.direction = 'SE';
        break;
    }
  }

  // Ball hit on left
  if (this.x <= 0) {
    console.log('Paddle2 score + 1')
    this.restart(440, 290, this.paddle1, this.paddle2)
    this.paddle2.score++
  }

  // Ball hit on paddle1
  if (this.x == 40 && board.paddle1.y < this.y && board.paddle1.y + 80 > this.y) {
    switch (this.direction) {
      case 'NW':
        this.direction = 'NE';
        break;
      case 'SW':
        this.direction = 'SE';
        break;
    }
  }

  // Ball hit on right
  if (this.x >= 900) {
    console.log('Paddle1 score + 1')
    this.restart(440, 290, this.paddle1, this.paddle2)
    this.paddle1.score++
  }
  // Ball hit on paddle2
  if (this.x == 850 && board.paddle2.y < this.y && board.paddle2.y + 80 > this.y) {
    switch (this.direction) {
      case 'NE':
        this.direction = 'NW';
        break;
      case 'SE':
        this.direction = 'SW';
        break;
    }
  }

  // Ball hit the floor
  if (this.y >= 600) {
    switch (this.direction) {
      case 'SE':
        this.direction = 'NE';
        break;
      case 'SW':
        this.direction = 'NW';
        break;
    }
  }
};
Ball.prototype.pointScored = function() {
  //funcion que va sumando los puntos
};

Ball.prototype.winner = function(){
  if(this.paddle1.score == 2) return this.paddle1.id
  if(this.paddle2.score == 2) return this.paddle2.id
  else return
 };

Ball.prototype.restart = function(x,y, paddle1, paddle2){
  this.x = x
  this.y = y
  this.paddle1 = paddle1
  this.paddle2 = paddle2
  this.direction = this.randomDirection()
 };
