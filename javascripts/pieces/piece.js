class Piece {
  constructor (attrs) {
    this.color = attrs.color;
    this.pieceType = attrs.pieceType;
    this.pos = attrs.pos;
    this.board = attrs.board;
  };

  setLocation (pos) {
    this.pos = pos;
  };
};

export default Piece;
