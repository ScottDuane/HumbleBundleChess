const INITIAL_CONDITIONS = [
                          { pieces: [{ pieceType: "knight", color: "black", pos: [0, 0]} ], color: "black" }

                        ];

const MOVEMENT_VECTORS = { "pawn": [[0, 1]],
                            "knight": [[1, 2], [-1, 2], [2, 1], [-2, 1], [1, -2], [-1, -2], [-2, -1], [2, -1]],
                            "bishop": [[1, 1], [1, -1], [-1, 1], [-1, -1]],
                            "rook": [[1, 0], [0, 1], [-1, 0], [0, -1]],
                            "queen": [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
                            "king": [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]  };

const SQUARE_CLASSES = ["black-square", "white-square"];

const IS_REPEATING = { pawn: false,
                              knight: false,
                              bishop: true,
                              rook: true,
                              queen: true,
                              king: false }

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

export { INITIAL_CONDITIONS, MOVEMENT_VECTORS, SQUARE_CLASSES, IS_REPEATING, LETTERS };
