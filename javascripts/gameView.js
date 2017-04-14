class GameView  {
  constructor (chessGame, boardContainer) {
    this.chessGame = chessGame;
    this.boardContainer = boardContainer;
    this.renderInitialBoard();
  };

  renderInitialBoard() {
    let COLOR_CLASSES = ["black-square", "white-square"];

    for (let i=0; i<8; i++) {
      let row = document.createElement("ul");
      row.className = "board-row";

      for (let j=0; j<8; j++) {
        let square = document.createElement("li");
        square.className = "square " + COLOR_CLASSES[(i + j) % 2];
        square.id = i.toString() + " " + j.toString();
        row.append(square);
      }

      this.boardContainer.append(row);
    }
  };

  renderValidMoves(color) {
    let moves = this.chessGame.findValidMoves(color);
    moves.forEach((move) => {
      let startId = move.startPos[0].toString() + " " + move.startPos[1].toString();
      let endId = move.endPos[0].toString() + " " + move.endPos[1].toString();
      let startSquare = document.getElementById(startId);
      let endSquare = document.getElementById(endId);
      let movingPiece = startSquare.childNodes[0];
      let capturedPiece = endSquare.childNodes ? endSquare.childNodes[0] : null;

      startSquare.className += "active-square";
      endSquare.className += "active-square";

      
    })
  }
}
