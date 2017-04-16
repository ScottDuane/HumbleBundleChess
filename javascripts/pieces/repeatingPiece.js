import Piece from './piece';
import { MOVEMENT_VECTORS } from '../util';

class RepeatingPiece extends Piece {
  constructor (pieceType, color, pos, chessGame) {
    super(pieceType, color, pos, chessGame);
  };

  getValidMoves() {
    let directions = MOVEMENT_VECTORS[this.pieceType];
    let validMoves = [];
    let that = this;

    directions.forEach((direction) => {
      let x = that.pos[0];
      let y = that.pos[1];
      while (that.chessGame.validCoordinates([x, y]) && that.chessGame.openSquare([x, y])) {
        validMoves.push({ startPos: that.pos, endPos: [x, y] });
        x += direction[0];
        y += direction[1];
      }

      if (that.chessGame.validCapture(that.pos, [x, y])) {
        validMoves.push({ startPos: that.pos, endPos: [x, y] });
      }
    });

    return validMoves;
  };

}

export default RepeatingPiece;
