import { SQUARE_CLASSES, LETTERS } from './util';

class GameView  {
  constructor (chessGame, boardContainer, listContainer, nextButton) {
    this.chessGame = chessGame;
    this.boardContainer = boardContainer;
    this.moveListContainer = listContainer;
    this.nextButton = nextButton;
  };

  renderInitialList() {
    let listTitle = document.createElement("h2");
    let emptyList = document.createElement("ul");
    listTitle.textContent = "Valid Moves";
    this.moveListContainer.append(listTitle);
    this.moveListContainer.append(emptyList);
  };

  renderInitialBoard() {
    let labelRow = document.createElement("ul");
    labelRow.className = "board-row";

    for (let k=1; k<=8; k++) {
      let columnLabel = document.createElement("li");
      columnLabel.className = "column-label";
      columnLabel.textContent = k.toString();
      labelRow.append(columnLabel);
    }

    this.boardContainer.append(labelRow);

    for (let i=0; i<8; i++) {
      let row = document.createElement("ul");
      row.className = "board-row";

      let rowLabel = document.createElement("span");
      rowLabel.textContent = LETTERS[i];
      rowLabel.className = "row-label";
      row.append(rowLabel);

      for (let j=0; j<8; j++) {
        let square = document.createElement("li");
        square.className = "square " + SQUARE_CLASSES[(i + j) % 2];
        square.id = i.toString() + " " + j.toString();
        row.append(square);
      }

      this.boardContainer.append(row);
    }
  };

  renderPieces() {
    this.chessGame.pieces.forEach((piece) => {
      let pieceImg = document.createElement("img");
      let src = "./icons/" + piece.color + "_" + piece.pieceType + ".svg";
      pieceImg.src = src;
      pieceImg.className = "piece-icon";
      let id = piece.pos[0].toString() + " " + piece.pos[1].toString();
      let square = document.getElementById(id);
      square.append(pieceImg);
    })
  };

  renderErrorMessage(error) {
    console.log(error);
  };

  renderValidMoves(color) {
    let moves = this.chessGame.findValidMoves(color);
    this.renderMovesAsText(moves);
    moves.forEach((move, idx) => {
      let startId = move.startPos[0].toString() + " " + move.startPos[1].toString();
      let endId = move.endPos[0].toString() + " " + move.endPos[1].toString();
      let startSquare = document.getElementById(startId);
      let endSquare = document.getElementById(endId);

      let startClass = startSquare.className;
      let endClass = endSquare.className;
      let that = this;

      setTimeout(() => {
        startSquare.className += " active-square";
        endSquare.className += " active-square";
      }, 2*idx*1000);

      setTimeout(() => {
        startSquare.className = startClass;
        endSquare.className = endClass;
      }, 2*idx*1000 + 1000);
    });
  };

  renderMovesAsText(moves) {
    let that = this;
    moves.forEach((move) => {
      let newMoveElement = document.createElement("li");
      let pieceType = that.chessGame.board.getBoardLocation(move.startPos[0], move.startPos[1]).pieceType;
      let endCoord = (move.endPos[1] + 1).toString();
      newMoveElement.textContent = pieceType + " to " + LETTERS[move.endPos[0]] + endCoord;
      that.moveListContainer.firstChild.append(newMoveElement);
    })
  }
}

export default GameView;
