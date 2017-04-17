import ChessGame from './javascripts/chessGame';
import GameView from './javascripts/gameView';
import { INITIAL_CONDITION } from './javascripts/util';

document.addEventListener('DOMContentLoaded', () => {
  let boardContainer = document.getElementById('gameboard-container');
  let listContainer = document.getElementById('move-list-container');
  let errorContainer = document.getElementById('error-list-container');

  let chessGame = new ChessGame();
  let gameView = new GameView(chessGame, boardContainer, listContainer, errorContainer);
  let errors = chessGame.checkBoardForErrors(INITIAL_CONDITION);

  if (!errors) {
    chessGame.parseInitialCondition();
    gameView.renderInitialBoard();
    gameView.renderInitialList();
    gameView.renderPieces();
    gameView.renderValidMoves(INITIAL_CONDITION.color);
  } else {
    gameView.renderErrorMessage(errors);
  }
});
