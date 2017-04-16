import ChessGame from './javascripts/chessGame';
import GameView from './javascripts/gameView';
import { INITIAL_CONDITIONS } from './javascripts/util';

document.addEventListener('DOMContentLoaded', () => {
  let boardContainer = document.getElementById('gameboard-container');
  let listContainer = document.getElementById('move-list-container');

  let chessGame = new ChessGame();
  let gameView = new GameView(chessGame, boardContainer, listContainer);

  INITIAL_CONDITIONS.forEach(function (boardState, idx) {

    // setTimeout(function () {
      chessGame.receiveNewBoard(boardState);
      gameView.renderInitialBoard();
      gameView.renderValidMoves(boardState.color);
    // }, idx*5000);
  });
});
