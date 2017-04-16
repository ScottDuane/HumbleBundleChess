import { SQUARE_CLASSES, LETTERS } from './util';

class GameView  {
  constructor (chessGame, boardContainer, listContainer) {
    this.chessGame = chessGame;
    this.boardContainer = boardContainer;
    this.moveListContainer = listContainer;
    this.renderInitialBoard();
    this.renderInitialList();
  };

  renderInitialList() {
    while (this.moveListContainer.hasChildNodes()) {
      this.moveListContainer.removeChild(this.moveListContainer.lastChild);
    }

    let listTitle = document.createElement("h2");
    let emptyList = document.createElement("ul");
    listTitle.text = "Valid Moves";
    this.moveListContainer.append(listTitle);
    this.moveListContainer.append(emptyList);

  }

  renderInitialBoard() {
    while (this.boardContainer.hasChildNodes()) {
      this.boardContainer.removeChild(this.boardContainer.lastChild);
    }

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

        let piece = this.chessGame.boardState[i][j];
        if (piece) {
          let pieceImg = document.createElement("img");
          let src = "./icons/" + piece.color + "_" + piece.pieceType + ".svg";
          pieceImg.src = src;
          pieceImg.className = "piece-icon";
          square.append(pieceImg);
        }

        row.append(square);
      }

      this.boardContainer.append(row);
    }
  };

  renderValidMoves(color) {
    let moves = this.chessGame.findValidMoves(color);
    moves.forEach((move, idx) => {
      let startId = move.startPos[0].toString() + " " + move.startPos[1].toString();
      let endId = move.endPos[0].toString() + " " + move.endPos[1].toString();
      let startSquare = document.getElementById(startId);
      let endSquare = document.getElementById(endId);

      let startClass = startSquare.className;
      let endClass = endSquare.className;
      let that = this;

      setTimeout(() => {
        let newMoveElement = document.createElement("li");
        let pieceType = that.chessGame.boardState[move.startPos[0]][move.startPos[1]].pieceType;
        let endCoord = (move.endPos[1] + 1).toString();
        newMoveElement.textContent = pieceType + " to " + LETTERS[move.endPos[0]] + endCoord;
        that.moveListContainer.firstChild.append(newMoveElement);
        startSquare.className += " active-square";
        endSquare.className += " active-square";
      }, 2*idx*2000);

      setTimeout(() => {
        startSquare.className = startClass;
        endSquare.className = endClass;
      }, 2*idx*2000 + 2000);
    });
  }
}

export default GameView;
