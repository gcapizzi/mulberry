import { Chess, ChessInstance, Square } from "chess.js";

import * as chess from "./chess";

export class Game implements chess.Game {
  private chess: ChessInstance;

  constructor() {
    this.chess = new Chess();
  }

  isCheck(): boolean | chess.Colour {
    return this.chess.in_check();
  }

  turn(): chess.Colour {
    return this.chess.turn() === "w" ? "white" : "black";
  }

  dests(): Map<chess.Square, chess.Square[]> {
    const dests = new Map();
    this.chess.SQUARES.forEach((s) => {
      const ms = this.chess.moves({ square: s, verbose: true });
      if (ms.length)
        dests.set(
          s,
          ms.map((m) => m.to)
        );
    });
    return dests;
  }

  play(orig: chess.Square, dest: chess.Square): void {
    this.chess.move({ from: orig, to: dest });
  }
}
