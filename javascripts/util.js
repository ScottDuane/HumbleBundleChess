const INITIAL_CONDITION = { pieces: [{ pieceType: "knight", color: "white", pos: [0, 0]},
                                     { pieceType: "rook", color: "black", pos: [0, 4]},
                                     { pieceType: "king", color: "black", pos: [0, 7]},
                                     { pieceType: "rook", color: "white", pos: [1, 5]},
                                     { pieceType: "pawn", color: "black", pos: [1, 6]},
                                     { pieceType: "pawn", color: "white", pos: [2, 5]},
                                     { pieceType: "pawn", color: "black", pos: [2, 7]},
                                     { pieceType: "bishop", color: "white", pos: [4, 7]},
                                     { pieceType: "queen", color: "white", pos: [6, 4]},
                                     { pieceType: "king", color: "white", pos: [7, 4]}
                                   ],
                            color: "white" };

const INITIAL_CONDITION_2 = { pieces: [{ pieceType: "king", color: "white", pos: [0, 0] },
                                     { pieceType: "king", color: "black", pos: [7, 7] },
                                     { pieceType: "knight", color: "white", pos: [1, 1] },
                                     { pieceType: "bishop", color: "black", pos: [2, 2] }], color: "white"};

const MOVEMENT_VECTORS = { "pawn": [[1, 0]],
                            "knight": [[1, 2], [-1, 2], [2, 1], [-2, 1], [1, -2], [-1, -2], [-2, -1], [2, -1]],
                            "bishop": [[1, 1], [1, -1], [-1, 1], [-1, -1]],
                            "rook": [[1, 0], [0, 1], [-1, 0], [0, -1]],
                            "queen": [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
                            "king": [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]  };

const SQUARE_CLASSES = ["white-square", "black-square"];

const IS_REPEATING = { pawn: false,
                              knight: false,
                              bishop: true,
                              rook: true,
                              queen: true,
                              king: false }

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

export { INITIAL_CONDITION, MOVEMENT_VECTORS, SQUARE_CLASSES, IS_REPEATING, LETTERS };
