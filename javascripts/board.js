class Board {
  constructor () {
    this.board = [];
    this.buildEmptyBoard();
  };

  buildEmptyBoard () {
    for (let i=0; i<8; i++) {
      this.board.push([]);
      for (let j=0; j<8; j++) {
        this.board[i].push(null);
      }
    }
  };

  getBoardLocation (x, y) {
    return this.board[x][y];
  };
  
  setBoardLocation (piece, move) {
    this.board[move[0]][move[1]] = piece;
  };

  validCoordinates (x, y) {
    return (x >= 0 && y >= 0) && (x < 8 && y < 8);
  };

  openSquare (x, y) {
    return this.validCoordinates(x, y) && !this.board[x][y];
  };

  occupiedSquare (x, y) {
    return this.validCoordinates(x, y) && this.board[x][y];
  };

  colorOf (x, y) {
    return this.board[x][y] ? this.board[x][y].color : null;
  };

  validCapture (attackCoord, preyCoord) {
    return this.occupiedSquare(preyCoord[0], preyCoord[1]) &&
           this.colorOf(attackCoord[0], attackCoord[1]) !== this.colorOf(preyCoord[0], preyCoord[1]);
  };
}

export default Board;
