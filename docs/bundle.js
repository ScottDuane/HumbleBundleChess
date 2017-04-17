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
/******/ 	__webpack_require__.p = "/HumbleBundleChess/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
                                     value: true
});
var INITIAL_CONDITION = { pieces: [{ pieceType: "knight", color: "white", pos: [0, 0] }, { pieceType: "rook", color: "black", pos: [0, 4] }, { pieceType: "king", color: "black", pos: [0, 7] }, { pieceType: "rook", color: "white", pos: [1, 5] }, { pieceType: "pawn", color: "black", pos: [1, 6] }, { pieceType: "pawn", color: "white", pos: [2, 5] }, { pieceType: "pawn", color: "black", pos: [2, 7] }, { pieceType: "bishop", color: "white", pos: [4, 7] }, { pieceType: "queen", color: "white", pos: [6, 4] }, { pieceType: "king", color: "white", pos: [7, 4] }],
                                     color: "white" };

var INITIAL_CONDITION_2 = { pieces: [{ pieceType: "king", color: "white", pos: [0, 0] }, { pieceType: "king", color: "black", pos: [7, 7] }, { pieceType: "knight", color: "white", pos: [1, 1] }, { pieceType: "bishop", color: "black", pos: [2, 2] }], color: "white" };

var MOVEMENT_VECTORS = { "pawn": [[1, 0]],
                                     "knight": [[1, 2], [-1, 2], [2, 1], [-2, 1], [1, -2], [-1, -2], [-2, -1], [2, -1]],
                                     "bishop": [[1, 1], [1, -1], [-1, 1], [-1, -1]],
                                     "rook": [[1, 0], [0, 1], [-1, 0], [0, -1]],
                                     "queen": [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
                                     "king": [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]] };

var SQUARE_CLASSES = ["white-square", "black-square"];

var IS_REPEATING = { pawn: false,
                                     knight: false,
                                     bishop: true,
                                     rook: true,
                                     queen: true,
                                     king: false };

var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

exports.INITIAL_CONDITION = INITIAL_CONDITION;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board() {
    _classCallCheck(this, Board);

    this.board = [];
    this.buildEmptyBoard();
  }

  _createClass(Board, [{
    key: "buildEmptyBoard",
    value: function buildEmptyBoard() {
      for (var i = 0; i < 8; i++) {
        this.board.push([]);
        for (var j = 0; j < 8; j++) {
          this.board[i].push(null);
        }
      }
    }
  }, {
    key: "getBoardLocation",
    value: function getBoardLocation(x, y) {
      return this.board[x][y];
    }
  }, {
    key: "setBoardLocation",
    value: function setBoardLocation(piece, move) {
      this.board[move[0]][move[1]] = piece;
    }
  }, {
    key: "validCoordinates",
    value: function validCoordinates(x, y) {
      return x >= 0 && y >= 0 && x < 8 && y < 8;
    }
  }, {
    key: "openSquare",
    value: function openSquare(x, y) {
      return this.validCoordinates(x, y) && !this.board[x][y];
    }
  }, {
    key: "occupiedSquare",
    value: function occupiedSquare(x, y) {
      return this.validCoordinates(x, y) && this.board[x][y];
    }
  }, {
    key: "colorOf",
    value: function colorOf(x, y) {
      return this.board[x][y] ? this.board[x][y].color : null;
    }
  }, {
    key: "validCapture",
    value: function validCapture(attackCoord, preyCoord) {
      return this.occupiedSquare(preyCoord[0], preyCoord[1]) && this.colorOf(attackCoord[0], attackCoord[1]) !== this.colorOf(preyCoord[0], preyCoord[1]);
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piece = function () {
  function Piece(attrs) {
    _classCallCheck(this, Piece);

    this.color = attrs.color;
    this.pieceType = attrs.pieceType;
    this.pos = attrs.pos;
    this.board = attrs.board;
  }

  _createClass(Piece, [{
    key: "setLocation",
    value: function setLocation(pos) {
      this.pos = pos;
    }
  }]);

  return Piece;
}();

;

exports.default = Piece;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = __webpack_require__(1);

var _board2 = _interopRequireDefault(_board);

var _nonRepeatingPiece = __webpack_require__(6);

var _nonRepeatingPiece2 = _interopRequireDefault(_nonRepeatingPiece);

var _repeatingPiece = __webpack_require__(7);

var _repeatingPiece2 = _interopRequireDefault(_repeatingPiece);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChessGame = function () {
  function ChessGame(gameView) {
    _classCallCheck(this, ChessGame);

    this.board = new _board2.default();
    this.pieces = [];
    this.gameView = gameView;
    this.parseInitialCondition();
  }

  _createClass(ChessGame, [{
    key: 'parseInitialCondition',
    value: function parseInitialCondition() {
      var _this = this;

      _util.INITIAL_CONDITION.pieces.forEach(function (pieceInfo) {
        pieceInfo.board = _this.board;
        var piece = _util.IS_REPEATING[pieceInfo.pieceType] ? new _repeatingPiece2.default(pieceInfo) : new _nonRepeatingPiece2.default(pieceInfo);
        _this.pieces.push(piece);
        _this.board.setBoardLocation(piece, pieceInfo.pos);
      });
    }
  }, {
    key: 'inCheck',
    value: function inCheck(color) {
      var king = this.getKing(color);
      var oppColor = color === "white" ? "black" : "white";
      var result = false;

      this.getPieceSet(oppColor).forEach(function (piece) {
        piece.getValidMoves().forEach(function (move) {
          if (move[0] === king.pos[0] && move[1] === king.pos[1]) {
            result = true;
          }
        });
      });

      return result;
    }
  }, {
    key: 'getPieceSet',
    value: function getPieceSet(color) {
      var pieceSet = [];
      this.pieces.forEach(function (piece) {
        if (piece.color === color) {
          pieceSet.push(piece);
        }
      });

      return pieceSet;
    }
  }, {
    key: 'getKing',
    value: function getKing(color) {
      var king = null;
      this.getPieceSet(color).forEach(function (piece) {
        if (piece.pieceType === "king") {
          king = piece;
        }
      });

      return king;
    }
  }, {
    key: 'findValidMoves',
    value: function findValidMoves(color) {
      var validMoves = [];
      var that = this;

      this.getPieceSet(color).forEach(function (piece) {
        piece.getValidMoves().forEach(function (move) {
          var result = that.tryMove(piece, move, color);
          if (!result[0]) {
            validMoves.push({ startPos: result[2], endPos: move });
          }

          that.undoMove(piece, result[2], result[1], move);
        });
      });

      return validMoves;
    }
  }, {
    key: 'tryMove',
    value: function tryMove(piece, move, color) {
      var oldPiece = this.board.getBoardLocation(move[0], move[1]);
      var oldCoords = piece.pos;

      this.board.setBoardLocation(piece, move);
      this.board.setBoardLocation(null, oldCoords);
      piece.setLocation(move);

      if (oldPiece) {
        var idx = this.pieces.indexOf(oldPiece);
        this.pieces.splice(idx, 1);
      }

      return [this.inCheck(color), oldPiece, oldCoords];
    }
  }, {
    key: 'undoMove',
    value: function undoMove(piece1, coord1, piece2, coord2) {
      var _this2 = this;

      this.board.setBoardLocation(piece1, coord1);
      this.board.setBoardLocation(piece2, coord2);
      piece1.setLocation(coord1);

      if (piece2) {
        piece2.setLocation(coord2);
      }

      [piece1, piece2].forEach(function (piece) {
        if (piece && !_this2.pieces.includes(piece)) {
          _this2.pieces.push(piece);
        }
      });
    }
  }, {
    key: 'checkBoardForErrors',
    value: function checkBoardForErrors(boardState) {
      var errors = [];
      var colors = ["black", "white"];
      var pieces = ["pawn", "knight", "bishop", "rook", "queen", "king"];

      if ((typeof boardState === 'undefined' ? 'undefined' : _typeof(boardState)) !== "object" || !boardState.pieces || !colors.includes(boardState.color)) {
        errors.push("Your initiial condition is the wrong type or it is missing a necessary attribute.");
      } else if (!Array.isArray(boardState.pieces)) {
        errors.push("Pieces attribute must be an array.");
      } else {
        boardState.pieces.forEach(function (piece, index) {
          if (!pieces.includes(piece.pieceType) || !colors.includes(piece.color)) {
            errors.push("There's a problem with the piece at index " + index.toString() + ".");
          }
        });
      }

      return errors.length > 0 ? errors : false;
    }
  }]);

  return ChessGame;
}();

exports.default = ChessGame;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(chessGame, boardContainer, listContainer, nextButton) {
    _classCallCheck(this, GameView);

    this.chessGame = chessGame;
    this.boardContainer = boardContainer;
    this.moveListContainer = listContainer;
    this.nextButton = nextButton;
  }

  _createClass(GameView, [{
    key: "renderInitialList",
    value: function renderInitialList() {
      var listTitle = document.createElement("h2");
      var emptyList = document.createElement("ul");
      listTitle.textContent = _util.INITIAL_CONDITION.color + "'s valid moves";
      listTitle.className = "list-header";
      emptyList.className = "move-list";
      this.moveListContainer.append(listTitle);
      this.moveListContainer.append(emptyList);
    }
  }, {
    key: "renderInitialBoard",
    value: function renderInitialBoard() {
      var labelRow = document.createElement("ul");
      labelRow.className = "board-row column-label-row";

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
          row.append(square);
        }

        this.boardContainer.append(row);
      }
    }
  }, {
    key: "renderPieces",
    value: function renderPieces() {
      this.chessGame.pieces.forEach(function (piece) {
        var pieceImg = document.createElement("img");
        var src = "./icons/" + piece.color + "_" + piece.pieceType + ".svg";
        pieceImg.src = src;
        pieceImg.className = "piece-icon";
        var id = piece.pos[0].toString() + " " + piece.pos[1].toString();
        var square = document.getElementById(id);
        square.append(pieceImg);
      });
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage(error) {
      console.log(error);
    }
  }, {
    key: "renderValidMoves",
    value: function renderValidMoves(color) {
      var _this = this;

      var moves = this.chessGame.findValidMoves(color);
      this.renderMovesAsText(moves);
      moves.forEach(function (move, idx) {
        var startId = move.startPos[0].toString() + " " + move.startPos[1].toString();
        var endId = move.endPos[0].toString() + " " + move.endPos[1].toString();
        var startSquare = document.getElementById(startId);
        var endSquare = document.getElementById(endId);

        var startClass = startSquare.className;
        var endClass = endSquare.className;
        var that = _this;

        setTimeout(function () {
          startSquare.className += " active-square";
          endSquare.className += " active-square";
        }, 2 * idx * 1000);

        setTimeout(function () {
          startSquare.className = startClass;
          endSquare.className = endClass;
        }, 2 * idx * 1000 + 1000);
      });
    }
  }, {
    key: "renderMovesAsText",
    value: function renderMovesAsText(moves) {
      var that = this;
      moves.forEach(function (move) {
        var newMoveElement = document.createElement("li");
        var pieceType = that.chessGame.board.getBoardLocation(move.startPos[0], move.startPos[1]).pieceType;
        var endCoord = (move.endPos[1] + 1).toString();
        newMoveElement.textContent = pieceType + " to " + _util.LETTERS[move.endPos[0]] + endCoord;
        that.moveListContainer.lastChild.append(newMoveElement);
      });
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chessGame = __webpack_require__(3);

var _chessGame2 = _interopRequireDefault(_chessGame);

var _gameView = __webpack_require__(4);

var _gameView2 = _interopRequireDefault(_gameView);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var boardContainer = document.getElementById('gameboard-container');
  var listContainer = document.getElementById('move-list-container');

  var chessGame = new _chessGame2.default();
  var gameView = new _gameView2.default(chessGame, boardContainer, listContainer);
  var errors = chessGame.checkBoardForErrors(_util.INITIAL_CONDITION);

  if (!errors) {
    gameView.renderInitialBoard();
    gameView.renderInitialList();
    gameView.renderPieces();
    gameView.renderValidMoves(_util.INITIAL_CONDITION.color);
  } else {
    gameView.renderErrorMessage(errors);
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(2);

var _piece2 = _interopRequireDefault(_piece);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonRepeatingPiece = function (_Piece) {
  _inherits(NonRepeatingPiece, _Piece);

  function NonRepeatingPiece(attrs) {
    _classCallCheck(this, NonRepeatingPiece);

    // because this subclass has the pawn special case, we use this helper to set the direction vectors
    var _this = _possibleConstructorReturn(this, (NonRepeatingPiece.__proto__ || Object.getPrototypeOf(NonRepeatingPiece)).call(this, attrs));

    _this.setDirectionVectors();
    return _this;
  }

  _createClass(NonRepeatingPiece, [{
    key: 'setDirectionVectors',
    value: function setDirectionVectors() {
      var directions = _util.MOVEMENT_VECTORS[this.pieceType];

      // handle those sneaky pawn captures
      if (this.pieceType === "pawn") {
        var hasNotMoved = this.color === "black" && this.pos[1] === 1 || this.color === "white" && this.pos[1] === 6;
        if (hasNotMoved) {
          directions.push([2, 0]);
        }

        if (this.color === "white") {
          directions.forEach(function (direction) {
            direction[0] *= -1;
          });
        }
      }

      this.directions = directions;
    }
  }, {
    key: 'getValidMoves',
    value: function getValidMoves() {
      var that = this;

      switch (this.pieceType) {
        case "pawn":
          return this.getPawnMoves();
          break;
        default:
          var validMoves = [];
          that.directions.forEach(function (direction) {
            var newX = that.pos[0] + direction[0];
            var newY = that.pos[1] + direction[1];
            if (that.board.openSquare(newX, newY) || that.board.validCapture(that.pos, [newX, newY])) {
              validMoves.push([newX, newY]);
            }
          });
          return validMoves;
          break;
      }
    }
  }, {
    key: 'getPawnMoves',
    value: function getPawnMoves() {
      var _this2 = this;

      var validMoves = [];

      this.directions.forEach(function (direction) {
        var newX = _this2.pos[0] + direction[0];
        var newY = _this2.pos[1] + direction[1];

        if (_this2.board.openSquare(newX, newY)) {
          validMoves.push([newX, newY]);
        }
      });

      var verticalDir = this.directions[0][0];
      [[verticalDir, 1], [verticalDir, -1]].forEach(function (captureDir) {
        var newCoords = [_this2.pos[0] + captureDir[0], _this2.pos[1] + captureDir[1]];

        if (_this2.board.validCapture(_this2.pos, newCoords)) {
          validMoves.push(newCoords);
        }
      });

      return validMoves;
    }
  }]);

  return NonRepeatingPiece;
}(_piece2.default);

exports.default = NonRepeatingPiece;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(2);

var _piece2 = _interopRequireDefault(_piece);

var _board = __webpack_require__(1);

var _board2 = _interopRequireDefault(_board);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepeatingPiece = function (_Piece) {
  _inherits(RepeatingPiece, _Piece);

  function RepeatingPiece(attrs) {
    _classCallCheck(this, RepeatingPiece);

    return _possibleConstructorReturn(this, (RepeatingPiece.__proto__ || Object.getPrototypeOf(RepeatingPiece)).call(this, attrs));
  }

  _createClass(RepeatingPiece, [{
    key: 'getValidMoves',
    value: function getValidMoves() {
      var _this2 = this;

      var directions = _util.MOVEMENT_VECTORS[this.pieceType];
      var validMoves = [];
      var that = this;

      directions.forEach(function (direction) {
        var x = _this2.pos[0] + direction[0];
        var y = _this2.pos[1] + direction[1];

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
    }
  }]);

  return RepeatingPiece;
}(_piece2.default);

exports.default = RepeatingPiece;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map