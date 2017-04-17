import Piece from './piece';
import { MOVEMENT_VECTORS } from '../util';

class NonRepeatingPiece extends Piece {
  constructor (attrs) {
    super(attrs);

    // because this subclass has the pawn special case, we use this helper to set the direction vectors
    this.setDirectionVectors();
  };

  setDirectionVectors() {
    let directions = MOVEMENT_VECTORS[this.pieceType];

    // handle those sneaky pawn captures
    if (this.pieceType === "pawn") {
      let hasNotMoved = (this.color === "black" && this.pos[1] === 1) ||
                        (this.color === "white" && this.pos[1] === 6);
      if (hasNotMoved) {
        directions.push([2, 0]);
      }

      if (this.color === "white") {
        directions.forEach((direction) => {
          direction[0] *= -1;
        });
      }
    }

    this.directions = directions;
  };

  getValidMoves () {
    let that = this;

    switch (this.pieceType) {
      case "pawn":
        return this.getPawnMoves();
        break;
      default:
        let validMoves = [];
        that.directions.forEach((direction) => {
          let newX = that.pos[0] + direction[0];
          let newY = that.pos[1] + direction[1];
          if (that.board.openSquare(newX, newY) || that.board.validCapture(that.pos, [newX, newY])) {
            validMoves.push([newX, newY]);
          }
        });
        return validMoves;
        break;
    }
  };

  getPawnMoves () {
    let validMoves = [];

    this.directions.forEach((direction) => {
      let newX = this.pos[0] + direction[0];
      let newY = this.pos[1] + direction[1];

      if (this.board.openSquare(newX, newY)) {
        validMoves.push([newX, newY]);
      }
    });

    let verticalDir = this.directions[0][0];
    [[verticalDir, 1], [verticalDir, -1]].forEach((captureDir) => {
      let newCoords = [this.pos[0] + captureDir[0], this.pos[1] + captureDir[1]];

      if (this.board.validCapture(this.pos, newCoords)) {
        validMoves.push(newCoords);
      }
    });

    return validMoves;
  }
}

export default NonRepeatingPiece;
