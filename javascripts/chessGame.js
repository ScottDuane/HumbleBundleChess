import NonRepeatingPiece from './pieces/nonRepeatingPiece';
import RepeatingPiece from './pieces/repeatingPiece';
import { IS_REPEATING } from './util';

class ChessGame {
  constructor () {
    this.boardState = [];
    this.resetBoard();
  };

  resetBoard () {
    this.whitePieces = [];
    this.blackPieces = [];
    this.blackKing = null;
    this.whiteKing = null;
    this.boardState = [];

    for (let i=0; i<8; i++) {
      this.boardState.push([]);
      for (let j=0; j<8; j++) {
        this.boardState[i].push(null);
      };
    };
  };

  receiveNewBoard(boardState) {
      this.resetBoard();
      let that = this;
      boardState.pieces.forEach((pieceAttributes) => {
        let piece = null;

        if (IS_REPEATING[pieceAttributes.pieceType]) {
          piece = new RepeatingPiece(pieceAttributes.pieceType, pieceAttributes.color, pieceAttributes.pos, that);
        } else {
          piece = new NonRepeatingPiece(pieceAttributes.pieceType, pieceAttributes.color, pieceAttributes.pos, that)
        }

        let pieceSet = boardState.color === "black" ? that.blackPieces : that.whitePieces;
        pieceSet.push(piece);

        that.boardState[pieceAttributes.pos[0]][pieceAttributes.pos[1]] = piece;
        if (pieceAttributes.pieceType === "king") {
          let king = boardState.color === "black" ? that.blackKing : that.whiteKing;
          king = piece;
        }
      });
  };

  findValidMoves(color) {
    let pieces = color === "black" ? this.blackPieces : this.whitePieces;
    let king = color === "black" ? this.blackKing : this.whiteKing;
    let validMoves = [];

    pieces.forEach((piece) => {
      let moves = piece.getValidMoves();
      moves.forEach((move) => {
        validMoves.push(move);
      });
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
    let that = this;

    // annoyingly verbose in order to avoid checking equality for object id instead of coordinate equality
    // essentially just checking if any of the opposingPieces can capture the king
    opposingPieces.forEach((piece) => {
      piece.getValidMoves.forEach((move) => {
        if ((move.startPos[0] === piece.pos[0] && move.startPos[1] === piece.pos[1]) &&
            (move.endPos[0] === kingPos[0] && move.endPos[1] === kingPos[1])) {
          return true;
        }
      })
    });

    return false;
  };

  validCoordinates(pos) {
    return (pos[0] < 8 && pos[1] < 8) && (pos[0] >= 0 && pos[1] >= 0);
  };

  openSquare(pos) {
    return !this.boardState[pos[0]][pos[1]];
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

export default ChessGame;
