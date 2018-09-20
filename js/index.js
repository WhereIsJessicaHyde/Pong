var board = new Board();
var paddle1Top;
var paddle2Top;
var paddleHeigth = parseInt($('.board__paddle').css('height'));
var paddleWidth = parseInt($('.board__paddle').css('width'));
var boardTop = parseInt($('.board').css('top'));
var boardLeft = parseInt($(".board").css('left'));
var boardHeight = parseInt($(".board").css("height"));
var intervalTime = 50;
var winner;
var game;

$('.start').on('click', function() {
  board.start();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState() {
  renderPaddle()
  renderBall()
  renderScore()
  renderGame()
}

$(document).on('keydown', function(e) {
  if (e.keyCode == 40) { //Arrow down
    paddle2Top = parseInt($('.board__paddle2').css('top'));
    if (paddleHeigth + paddle2Top < boardHeight)
    board.paddle2.moveDown(paddle2Top);
  }
  if (e.keyCode == 38) { //Arrow up
    paddle2Top = parseInt($('.board__paddle2').css('top'));
    if (paddle2Top > 0)
      board.paddle2.moveUp(paddle2Top);
  }

  if (e.keyCode == 65) { //A -> paddle1 down
    paddle1Top = parseInt($('.board__paddle1').css('top'))
    if (paddleHeigth + paddle1Top < boardHeight)
      board.paddle1.moveDown(paddle1Top)
  }

  if (e.keyCode == 81) { //Q -> paddle1 up
    paddle1Top = parseInt($('.board__paddle1').css('top'));
    if (paddle1Top > 0)
      board.paddle1.moveUp(paddle1Top);
  }
});

function renderGame() {
  winner = board.ball.winner()
  if (winner == 1) {
    $('.leyend__score1').children('span').text('win')
    clearInterval(game)
  }
  if (winner == 2) {
    $('.leyend__score2').children('span').text('win')
    clearInterval(game)
  }
}

function renderScore(){
  $('.leyend__score1').children('span').text(board.paddle1.score);
  $('.leyend__score2').children('span').text(board.paddle2.score);
}

function renderBall(){
  board.ball.move()
  $('.board__ball').css('top', board.ball.y + 'px')
  $('.board__ball').css('left', board.ball.x + 'px')
 }

 function renderPaddle(){
  $('.board__paddle1').css('top', board.paddle1.y + 'px')
  $('.board__paddle1').css('left', board.paddle1.x + 'px')

  $('.board__paddle2').css('top', board.paddle2.y + 'px')
  $('.board__paddle2').css('left', board.paddle2.x + 'px')
 }
