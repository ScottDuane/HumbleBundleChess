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

    switch color {
      case "black":
        let pieces = this.blackPieces;
        let king = this.blackKing;
        break;
      case "white":
        let king = this.whiteKing;
        let pieces = this.whitePieces;
        break;
    }

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

  findValidMovesByPiece(piece) {
    let boardCopy = this.boardState.slice(0);
    // refactor: instead of getMoveCandidates, getMoveLimit (boolean that determines whether more than one step is ok),
    // and getVectors, determining which direction piece can move
    piece.getMoveCandidates().forEach((candidate) => {
      // based on each vector/limit combo (iterator inside while loop for unlimited; iterator for limited) do:
      // check if space is a capture
      // check if the space is vacant
      // check if the board is in check from that move
    });
  };

  inCheck(color) {

  };
}
