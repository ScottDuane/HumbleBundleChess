class Piece {
  constructor (pieceType, color, pos, board) {
    this.color = color;
    this.type = pieceType;
    this.pos = pos;
    this.board = board;
    this.setMoveAttributes();
  };

  // refactor using class inheritance?
  setMoveAttributes() {
    switch (this.type) {
      case "pawn":
        this.captureDirections = [[1, 1], [-1, 1]];

        if ((this.pos[1] === 1 && this.color === "white") || (this.pos[1] === 6 && this.color === "black")) {
          this.moveDirections = [[0, 1], [0, 2]];
        } else {
          this.moveDirections = [[0, 1]];
        }

        this.moveLimit = true;
        break;
      case "rook":
        this.moveDirections = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        this.moveLimit = false;
        break;
      case "knight":
        this.moveDirections = [[1, 2], [-1, 2], [2, 1], [-2, 1], [1, -2], [-1, -2], [-2, -1], [2, -1]];
        this.moveLimit = true;
        break;
      case "bishop":
        this.moveDirections = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
        this.moveLimit = false;
        break;
      case "queen":
        this.moveDirections = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
        this.moveLimit = false;
        break;
      case "king":
        this.moveDirections = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
        this.moveLimit = true;
        break;
      default:
    };
  };
}
