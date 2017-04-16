import Piece from './piece';
import { MOVEMENT_VECTORS } from '../util';

class NonRepeatingPiece extends Piece {
  constructor (pieceType, color, pos, board, hasMoved) {
    super(pieceType, color, pos, board);

    // note: this.hasMoved would be set to false in the constructor if this were a "real" chess game,
    // but because we're taking in a mid-game board state, we'll sometimes create pieces that have already moved
    this.hasMoved = hasMoved;
  };

  getValidMoves () {
    let directions = MOVEMENT_VECTORS[this.pieceType];
    let validMoves = [];
    let that = this;

    directions.forEach((direction) => {
      let newCoords = [that.pos[0] + direction[0], that.pos[1] + direction[1]];
      if (that.chessGame.validCoordinates(newCoords) &&
         (that.chessGame.openSquare(newCoords) || that.chessGame.validCapture(that.pos, newCoords))) {
        validMoves.push( { startPos: that.pos, endPos: newCoords } );
      }
    });

    if (this.pieceType === "pawn" && !this.hasMoved) {
      let newCoords = [this.pos[0], this.pos[1] + 2];
      validMoves.push({ startPos: this.pos, endPos: newCoords });
    }

    return validMoves;
  }
}

export default NonRepeatingPiece;
