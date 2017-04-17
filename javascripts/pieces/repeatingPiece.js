import Piece from './piece';
import Board from '../board';
import { MOVEMENT_VECTORS } from '../util';

class RepeatingPiece extends Piece {
  constructor (attrs) {
    super(attrs);
  };

  getValidMoves() {
    let directions = MOVEMENT_VECTORS[this.pieceType];
    let validMoves = [];
    let that = this;

    directions.forEach((direction) => {
      let x = this.pos[0] + direction[0];
      let y = this.pos[1] + direction[1];

      while (that.board.openSquare(x, y)) {
        validMoves.push([x, y]);
        x += direction[0];
        y += direction[1];
      }

      if (that.board.validCapture(that.pos, [x, y])) {
        validMoves.push([x, y]);
      }
    });

    return validMoves;
  };

}

export default RepeatingPiece;
