## Humble Bundle Chess

TODO:

- Seed with 3 initial conditions
- final styling
[x] Github pages hosting
- README update
- error handling

ok figure this shit out

chessGame
-> constructor
-> setupBoard
-> resetBoard
-> findValidMoves
-> putsInCheck
-> isInCheck
-> createDeepBoardCopy
-> validCoordinates
-> openSquare
-> validCapture
-> checkBoardForErrors

--------

chessGame
-> constructor (board, pieces)

gameView
-> constructor
-> renderInitialBoard
-> renderInitialList
-> renderPieces
-> renderErrorMessage
-> renderValidMoves
-> renderMovesAsText

piece
-> constructor
-> getValidMoves
