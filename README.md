## Humble Bundle Chess

**[View Live Demo](https://scottduane.github.io/HumbleBundleChess)**

This repo builds the outline of a chess game, taking a snapshot of a board and rendering all legal moves for a given color.  The link above demonstrates using a built-in initial board. To alter the initial board, do the following:

1. Clone the repo,
2. Go to the `javascripts/util.js` file and change the value of `const INITIAL_CONDITION`, using the format below to pass in the pieces and the color of the player whose turn is next.  

```javascript
  const INITIAL_CONDITION = { pieces: [{ pieceType: "king", color: "white", pos: [0, 0] },
                                       { pieceType: "king", color: "black", pos: [7, 7] },
                                       { pieceType: "knight", color: "white", pos: [1, 1] },
                                       { pieceType: "bishop", color: "black", pos: [2, 2] }
                                      ],
                              color: "white"};
```

3. Copy the path for `index.html` into your browser to see the board and valid moves render.

### Class Structure

The classes used here are:

- `GameView`, which holds an instance of `ChessGame` and handles rendering to the DOM,
- `ChessGame`, which holds an instance of `Board` and an array of `Piece` instances,
- `Board`, which holds information about the grid of pieces and empty spaces as an array,
- `Piece`, split into subclasses `NonRepeatingPiece` and `RepeatingPiece`.
    - The `RepeatingPiece` class is used for pieces that are allowed to move an arbitrary number of steps rather than just one (or two, in the case of pawns).  Queens, rooks, and bishops are `RepeatingPiece`s.
    - The `NonRepeatingPiece` class is used for the rest of the pieces, namely pawns, kings, and knights.
    - Pawns are particularly tricky to deal with, because they can move two spaces if and only if they have not yet moved. Similarly, their capturing behavior is different. To account for this, the `NonRepeatingPiece` class has a special `getPawnMoves` function in addition to `getValidMoves` for the rest of the pieces.

### Unimplemented Features

En passante, castling, and pawn promotion are not implemented. En passante and castling would require a slight change in the `Piece` class: each pawn, king, and rook should keep `this.numMoves` to remember the number of moves they've made. The structure is already set up to easily transform a pawn that reaches a particular row -- the `pieceType` attribute can be edited directly.  Since the piece's direction vectors are stored in `util.js` and only accessed in the `getValidMoves` method, no other changes would be necessary.

### Error Handling

Before rendering the board and moves, the engine processes the `INITIAL_CONDITION` by checking for its object type and its necessary attributes. If any errors are found, a separate `div` outlining the errors is rendered in lieu of the board and list of moves.  

Error handling is limited; there is no check for duplicate piece locations, for example, or for the presence of a king of each color.  
