document.addEventListener('DOMContentLoaded', () => {
  let boardContainer = document.getElementById('gameboard-container');

  let chessGame = new ChessGame();
  let gameView = new GameView(chessGame, boardContainer);
  InitialConditions.forEach((boardState) => {
    chessGame.receiveNewBoard(boardState);
    gameView.renderInitialBoard();
    gameView.renderValidMoves(boardState.color);
    window.setTimeout(() => {});
  });

});
