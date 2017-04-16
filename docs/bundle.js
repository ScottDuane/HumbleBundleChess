/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
                            value: true
});
var INITIAL_CONDITIONS = [{ pieces: [{ pieceType: "knight", color: "black", pos: [0, 0] }], color: "black" }];

var MOVEMENT_VECTORS = { "pawn": [[0, 1]],
                            "knight": [[1, 2], [-1, 2], [2, 1], [-2, 1], [1, -2], [-1, -2], [-2, -1], [2, -1]],
                            "bishop": [[1, 1], [1, -1], [-1, 1], [-1, -1]],
                            "rook": [[1, 0], [0, 1], [-1, 0], [0, -1]],
                            "queen": [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
                            "king": [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]] };

var SQUARE_CLASSES = ["black-square", "white-square"];

var IS_REPEATING = { pawn: false,
                            knight: false,
                            bishop: true,
                            rook: true,
                            queen: true,
                            king: false };

var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

exports.INITIAL_CONDITIONS = INITIAL_CONDITIONS;
exports.MOVEMENT_VECTORS = MOVEMENT_VECTORS;
exports.SQUARE_CLASSES = SQUARE_CLASSES;
exports.IS_REPEATING = IS_REPEATING;
exports.LETTERS = LETTERS;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piece = function Piece(pieceType, color, pos, chessGame) {
  _classCallCheck(this, Piece);

  this.color = color;
  this.pieceType = pieceType;
  this.pos = pos;
  this.chessGame = chessGame;
};

;

exports.default = Piece;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nonRepeatingPiece = __webpack_require__(5);

var _nonRepeatingPiece2 = _interopRequireDefault(_nonRepeatingPiece);

var _repeatingPiece = __webpack_require__(6);

var _repeatingPiece2 = _interopRequireDefault(_repeatingPiece);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChessGame = function () {
  function ChessGame() {
    _classCallCheck(this, ChessGame);

    this.boardState = [];
    this.resetBoard();
  }

  _createClass(ChessGame, [{
    key: 'resetBoard',
    value: function resetBoard() {
      this.whitePieces = [];
      this.blackPieces = [];
      this.blackKing = null;
      this.whiteKing = null;
      this.boardState = [];

      for (var i = 0; i < 8; i++) {
        this.boardState.push([]);
        for (var j = 0; j < 8; j++) {
          this.boardState[i].push(null);
        };
      };
    }
  }, {
    key: 'receiveNewBoard',
    value: function receiveNewBoard(boardState) {
      this.resetBoard();
      var that = this;
      boardState.pieces.forEach(function (pieceAttributes) {
        var piece = null;

        if (_util.IS_REPEATING[pieceAttributes.pieceType]) {
          piece = new _repeatingPiece2.default(pieceAttributes.pieceType, pieceAttributes.color, pieceAttributes.pos, that);
        } else {
          piece = new _nonRepeatingPiece2.default(pieceAttributes.pieceType, pieceAttributes.color, pieceAttributes.pos, that);
        }

        var pieceSet = boardState.color === "black" ? that.blackPieces : that.whitePieces;
        pieceSet.push(piece);

        that.boardState[pieceAttributes.pos[0]][pieceAttributes.pos[1]] = piece;
        if (pieceAttributes.pieceType === "king") {
          var king = boardState.color === "black" ? that.blackKing : that.whiteKing;
          king = piece;
        }
      });
    }
  }, {
    key: 'findValidMoves',
    value: function findValidMoves(color) {
      var pieces = color === "black" ? this.blackPieces : this.whitePieces;
      var king = color === "black" ? this.blackKing : this.whiteKing;
      var validMoves = [];

      pieces.forEach(function (piece) {
        var moves = piece.getValidMoves();
        moves.forEach(function (move) {
          validMoves.push(move);
        });
      });

      return validMoves;
    }
  }, {
    key: 'putsInCheck',


    // takes in a move (oldPos -> newPos) and checks if color is in check after that move
    value: function putsInCheck(oldPos, newPos, color) {
      var boardCopy = this.boardState.slice(0);
      var kingPos = this.color == "black" ? this.blackKing : this.whiteKing;
      kingPos = kingPos == oldPos ? newPos : kingPos;

      boardCopy[newPos[0]][newPos[1]] = boardCopy[oldPos[0]][oldPos[1]];
      boardCopy[oldPos[0]][oldPos[1]] = null;
      var opposingPieces = color == "black" ? this.whitePieces : this.blackPieces;
      var that = this;

      // annoyingly verbose in order to avoid checking equality for object id instead of coordinate equality
      // essentially just checking if any of the opposingPieces can capture the king
      opposingPieces.forEach(function (piece) {
        piece.getValidMoves.forEach(function (move) {
          if (move.startPos[0] === piece.pos[0] && move.startPos[1] === piece.pos[1] && move.endPos[0] === kingPos[0] && move.endPos[1] === kingPos[1]) {
            return true;
          }
        });
      });

      return false;
    }
  }, {
    key: 'validCoordinates',
    value: function validCoordinates(pos) {
      return pos[0] < 8 && pos[1] < 8 && pos[0] >= 0 && pos[1] >= 0;
    }
  }, {
    key: 'openSquare',
    value: function openSquare(pos) {
      return !this.boardState[pos[0]][pos[1]];
    }
  }, {
    key: 'validCapture',


    // this method assumes no obstructing pieces -- that is for Piece.validMoves() to do
    value: function validCapture(attackPos, preyPos) {
      var attackPiece = this.boardState[attackPos[0]][attackPos[1]];
      var preyPiece = this.boardState[preyPos[0]][preyPos[1]];

      if (!attackPiece || !preyPiece) {
        return false;
      } else {
        return attackPiece.color !== preyPiece.color;
      }
    }
  }]);

  return ChessGame;
}();

exports.default = ChessGame;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(chessGame, boardContainer, listContainer) {
    _classCallCheck(this, GameView);

    this.chessGame = chessGame;
    this.boardContainer = boardContainer;
    this.moveListContainer = listContainer;
    this.renderInitialBoard();
    this.renderInitialList();
  }

  _createClass(GameView, [{
    key: "renderInitialList",
    value: function renderInitialList() {
      while (this.moveListContainer.hasChildNodes()) {
        this.moveListContainer.removeChild(this.moveListContainer.lastChild);
      }

      var listTitle = document.createElement("h2");
      var emptyList = document.createElement("ul");
      listTitle.text = "Valid Moves";
      this.moveListContainer.append(listTitle);
      this.moveListContainer.append(emptyList);
    }
  }, {
    key: "renderInitialBoard",
    value: function renderInitialBoard() {
      while (this.boardContainer.hasChildNodes()) {
        this.boardContainer.removeChild(this.boardContainer.lastChild);
      }

      var labelRow = document.createElement("ul");
      labelRow.className = "board-row";

      for (var k = 1; k <= 8; k++) {
        var columnLabel = document.createElement("li");
        columnLabel.className = "column-label";
        columnLabel.textContent = k.toString();
        labelRow.append(columnLabel);
      }

      this.boardContainer.append(labelRow);

      for (var i = 0; i < 8; i++) {
        var row = document.createElement("ul");
        row.className = "board-row";
        var rowLabel = document.createElement("span");
        rowLabel.textContent = _util.LETTERS[i];
        rowLabel.className = "row-label";
        row.append(rowLabel);

        for (var j = 0; j < 8; j++) {
          var square = document.createElement("li");
          square.className = "square " + _util.SQUARE_CLASSES[(i + j) % 2];
          square.id = i.toString() + " " + j.toString();

          var piece = this.chessGame.boardState[i][j];
          if (piece) {
            var pieceImg = document.createElement("img");
            var src = "./icons/" + piece.color + "_" + piece.pieceType + ".svg";
            pieceImg.src = src;
            pieceImg.className = "piece-icon";
            square.append(pieceImg);
          }

          row.append(square);
        }

        this.boardContainer.append(row);
      }
    }
  }, {
    key: "renderValidMoves",
    value: function renderValidMoves(color) {
      var _this = this;

      var moves = this.chessGame.findValidMoves(color);
      moves.forEach(function (move, idx) {
        var startId = move.startPos[0].toString() + " " + move.startPos[1].toString();
        var endId = move.endPos[0].toString() + " " + move.endPos[1].toString();
        var startSquare = document.getElementById(startId);
        var endSquare = document.getElementById(endId);

        var startClass = startSquare.className;
        var endClass = endSquare.className;
        var that = _this;

        setTimeout(function () {
          var newMoveElement = document.createElement("li");
          var pieceType = that.chessGame.boardState[move.startPos[0]][move.startPos[1]].pieceType;
          var endCoord = (move.endPos[1] + 1).toString();
          newMoveElement.textContent = pieceType + " to " + _util.LETTERS[move.endPos[0]] + endCoord;
          that.moveListContainer.firstChild.append(newMoveElement);
          startSquare.className += " active-square";
          endSquare.className += " active-square";
        }, 2 * idx * 2000);

        setTimeout(function () {
          startSquare.className = startClass;
          endSquare.className = endClass;
        }, 2 * idx * 2000 + 2000);
      });
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chessGame = __webpack_require__(2);

var _chessGame2 = _interopRequireDefault(_chessGame);

var _gameView = __webpack_require__(3);

var _gameView2 = _interopRequireDefault(_gameView);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var boardContainer = document.getElementById('gameboard-container');
  var listContainer = document.getElementById('move-list-container');

  var chessGame = new _chessGame2.default();
  var gameView = new _gameView2.default(chessGame, boardContainer, listContainer);

  _util.INITIAL_CONDITIONS.forEach(function (boardState, idx) {

    // setTimeout(function () {
    chessGame.receiveNewBoard(boardState);
    gameView.renderInitialBoard();
    gameView.renderValidMoves(boardState.color);
    // }, idx*5000);
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(1);

var _piece2 = _interopRequireDefault(_piece);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonRepeatingPiece = function (_Piece) {
  _inherits(NonRepeatingPiece, _Piece);

  function NonRepeatingPiece(pieceType, color, pos, board, hasMoved) {
    _classCallCheck(this, NonRepeatingPiece);

    // note: this.hasMoved would be set to false in the constructor if this were a "real" chess game,
    // but because we're taking in a mid-game board state, we'll sometimes create pieces that have already moved
    var _this = _possibleConstructorReturn(this, (NonRepeatingPiece.__proto__ || Object.getPrototypeOf(NonRepeatingPiece)).call(this, pieceType, color, pos, board));

    _this.hasMoved = hasMoved;
    return _this;
  }

  _createClass(NonRepeatingPiece, [{
    key: 'getValidMoves',
    value: function getValidMoves() {
      var directions = _util.MOVEMENT_VECTORS[this.pieceType];
      var validMoves = [];
      var that = this;

      directions.forEach(function (direction) {
        var newCoords = [that.pos[0] + direction[0], that.pos[1] + direction[1]];
        if (that.chessGame.validCoordinates(newCoords) && (that.chessGame.openSquare(newCoords) || that.chessGame.validCapture(that.pos, newCoords))) {
          validMoves.push({ startPos: that.pos, endPos: newCoords });
        }
      });

      if (this.pieceType === "pawn" && !this.hasMoved) {
        var newCoords = [this.pos[0], this.pos[1] + 2];
        validMoves.push({ startPos: this.pos, endPos: newCoords });
      }

      return validMoves;
    }
  }]);

  return NonRepeatingPiece;
}(_piece2.default);

exports.default = NonRepeatingPiece;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(1);

var _piece2 = _interopRequireDefault(_piece);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepeatingPiece = function (_Piece) {
  _inherits(RepeatingPiece, _Piece);

  function RepeatingPiece(pieceType, color, pos, chessGame) {
    _classCallCheck(this, RepeatingPiece);

    return _possibleConstructorReturn(this, (RepeatingPiece.__proto__ || Object.getPrototypeOf(RepeatingPiece)).call(this, pieceType, color, pos, chessGame));
  }

  _createClass(RepeatingPiece, [{
    key: 'getValidMoves',
    value: function getValidMoves() {
      var directions = _util.MOVEMENT_VECTORS[this.pieceType];
      var validMoves = [];
      var that = this;

      directions.forEach(function (direction) {
        var x = that.pos[0];
        var y = that.pos[1];
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
    }
  }]);

  return RepeatingPiece;
}(_piece2.default);

exports.default = RepeatingPiece;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map