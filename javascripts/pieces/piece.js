class Piece {
  constructor (attrs) {
    this.color = attrs.color.toLowerCase();
    this.pieceType = attrs.pieceType.toLowerCase();
    this.pos = attrs.pos;
    this.board = attrs.board;
  };

  setLocation (pos) {
    this.pos = pos;
  };
};

export default Piece;
