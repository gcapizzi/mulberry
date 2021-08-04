import * as ivanchuk from "ivanchuk/dist/chess";
import * as chess from "./chess";

export class Game implements chess.Game {
  private game: ivanchuk.Game;

  constructor() {
    this.game = ivanchuk.Game.startingPosition();
  }

  isCheck(): boolean | chess.Colour {
    return false;
  }

  turn(): chess.Colour {
    return this.game.getNextToMove() === ivanchuk.Piece.Colour.WHITE ? "white" : "black";
  }

  dests(): Map<chess.Square, chess.Square[]> {
    const dests = new Map();
    this.game.allValidDestinations().forEach((ds, s) => {
      dests.set(s.toString().toLowerCase(), ds.map((s) => s.toString().toLowerCase()));
    });
    return dests;
  }

  play(orig: chess.Square, dest: chess.Square): Game {
    const newGame = new Game();
    newGame.game = this.game.move(ivanchuk.Square.fromString(orig)!, ivanchuk.Square.fromString(dest)!);
    return newGame;
  }
}
