class ChessGame {
  constructor () {
    this.boardState = [];
    this.blackPieces = [];
    this.whitePieces = [];
    this.blackKing = null;
    this.whiteKing = null;
    this.resetBoard();
  };

  resetBoard () {
    for (let i=0; i<8; i++) {
      this.boardState.push([]);
      for (let j=0; j<8; j++) {
        this.boardState[i].push(null);
      };
    };
  };

  receiveNewBoard(board) {
      // takes in positions of pieces
      // creates pieces
      // places pieces into the blank board state
      this.resetBoard();
  };

  updateBoardState(boardState) {
    this.boardState = boardState;
  };

  findValidMoves(color) {
    let pieces = color === "black" ? this.blackPieces : this.whitePieces;
    let king = color === "black" ? this.blackKing : this.whiteKing;

    let that = this;
    let validMoves = [];

    pieces.forEach((piece) => {
      let moves = that.findValidMovesByPiece(piece);
      moves.forEach((move) => {
        validMoves.push(move);
      });
    });

    return validMoves;
  };

  // seems like there's a cleaner way to do this
  // consider a function on piece.js that returns the list of possible next squares,
  // based on piece's starting position
  // loop through this list, breaking when another piece is hit
  // use an index in a while loop with the condition this.openSquare(newPos) while newPos is next on the list of
  // piece's available moves
  findValidMovesByPiece(piece) {
    let validMoves = [];
    piece.moveDirections.forEach((direction) => {
      let newPos = [piece.pos[0] + direction[0], piece.pos[1] + direction[1]];
      if (piece.moveLimit) {
        if ((this.openSquare(newPos) || this.validCapture(newPos, piece.color)) && !putsInCheck(piece.pos, newPos, piece.color)) {
          validMoves.push([piece.pos, newPos]);
        }
      } else {
        while (this.openSquare(newPos)) {
          validMoves.push([piece.pos, newPos]);
          newPos[0] += direction[0];
          newPos[1] += direction[1];
        }

        if (this.validCapture(newPos, piece.color)) {
          validMoves.push([piece.pos, newPos]);
        }
      }
    });

    return validMoves;
  };

  // takes in a move (oldPos -> newPos) and checks if color is in check after that move
  putsInCheck(oldPos, newPos, color) {
    let boardCopy = this.boardState.slice(0);
    let kingPos = this.color == "black" ? this.blackKing : this.whiteKing;
    kingPos = kingPos == oldPos ? newPos : kingPos;

    boardCopy[newPos[0]][newPos[1]] = boardCopy[oldPos[0]][oldPos[1]];
    boardCopy[oldPos[0]][oldPos[1]] = null;
    let opposingPieces = color == "black" ? this.whitePieces : this.blackPieces;

    opposingPieces.forEach((piece) => {
      if (this.validCapture(piece.pos, kingPos)) {
        return true;
      };
    }).bind(this);

    return false;
  };

  // this method assumes no obstructing pieces -- that is for Piece.validMoves() to do
  validCapture(attackPos, preyPos) {
    let attackPiece = this.boardState[attackPos[0]][attackPos[1]];
    let preyPiece = this.boardState[preyPos[0]][preyPos[1]];

    if (!attackPiece || !preyPiece) {
      return false;
    } else {      
      return attackPiece.color !== preyPiece.color;
    }
  };
}
