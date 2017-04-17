import Board from './board';
import NonRepeatingPiece from './pieces/nonRepeatingPiece';
import RepeatingPiece from './pieces/repeatingPiece';
import { IS_REPEATING, INITIAL_CONDITION } from './util';

class ChessGame {
  constructor (gameView) {
    this.board = new Board();
    this.pieces = [];
    this.gameView = gameView;
    this.parseInitialCondition();
  };

  parseInitialCondition () {
    INITIAL_CONDITION.pieces.forEach((pieceInfo) => {
      pieceInfo.board = this.board;
      let piece = IS_REPEATING[pieceInfo.pieceType] ? new RepeatingPiece(pieceInfo) : new NonRepeatingPiece(pieceInfo);
      this.pieces.push(piece);
      this.board.setBoardLocation(piece, pieceInfo.pos);
    });
  };

  inCheck (color) {
    let king = this.getKing(color);
    let oppColor = color === "white" ? "black" : "white";
    let result = false;

    this.getPieceSet(oppColor).forEach((piece) => {
      piece.getValidMoves().forEach((move) => {
        if (move[0] === king.pos[0] && move[1] === king.pos[1]) {
          result = true;
        }
      });
    });

    return result;
  };

  getPieceSet (color) {
    let pieceSet = [];
    this.pieces.forEach((piece) => {
      if (piece.color === color) {
        pieceSet.push(piece);
      }
    });

    return pieceSet;
  };

  getKing(color) {
    let king = null;
    this.getPieceSet(color).forEach((piece) => {
      if (piece.pieceType === "king") {
        king = piece;
      }
    });

    return king;
  };

  findValidMoves (color) {
    let validMoves = [];
    let that = this;

    this.getPieceSet(color).forEach((piece) => {
      piece.getValidMoves().forEach((move) => {
        let result = that.tryMove(piece, move, color);
        if(!result[0]) {
          validMoves.push( { startPos: result[2], endPos: move } );
        }

        that.undoMove(piece, result[2], result[1], move);
      });
    });

    return validMoves;
  };

  tryMove (piece, move, color) {
    let oldPiece = this.board.getBoardLocation(move[0], move[1]);
    let oldCoords = piece.pos;

    this.board.setBoardLocation(piece, move);
    this.board.setBoardLocation(null, oldCoords);
    piece.setLocation(move);

    if (oldPiece) {
      let idx = this.pieces.indexOf(oldPiece);
      this.pieces.splice(idx, 1);
    }

    return [this.inCheck(color), oldPiece, oldCoords];
  };

  undoMove(piece1, coord1, piece2, coord2) {
    this.board.setBoardLocation(piece1, coord1);
    this.board.setBoardLocation(piece2, coord2);
    piece1.setLocation(coord1);

    if (piece2) {
      piece2.setLocation(coord2);
    }

    [piece1, piece2].forEach((piece) => {
      if (piece && !this.pieces.includes(piece)) {
        this.pieces.push(piece);
      }
    });
  };

  checkBoardForErrors(boardState) {
    let errors = [];
    let colors = ["black", "white"];
    let pieces = ["pawn", "knight", "bishop", "rook", "queen", "king"];

    if ((typeof(boardState) !== "object"|| !boardState.pieces)|| !colors.includes(boardState.color)) {
      errors.push("Your initiial condition is the wrong type or it is missing a necessary attribute.");
    } else if (!Array.isArray(boardState.pieces)){
      errors.push("Pieces attribute must be an array.");
    } else {
      boardState.pieces.forEach((piece, index) => {
        if (!pieces.includes(piece.pieceType) || !colors.includes(piece.color)) {
          errors.push("There's a problem with the piece at index " + index.toString() + ".");
        }
      });
    }

    return errors.length > 0 ? errors : false;
  };
}

export default ChessGame;
