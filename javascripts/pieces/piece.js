class Piece {
  constructor (pieceType, color, pos, chessGame) {
    this.color = color;
    this.pieceType = pieceType;
    this.pos = pos;
    this.chessGame = chessGame;
  };
};

export default Piece;
