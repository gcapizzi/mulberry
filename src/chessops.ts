import { Chess } from 'chessops/chess';
import { chessgroundDests } from 'chessops/compat';
import { parseSquare } from 'chessops/util';

import * as chess from './chess'

export class Game implements chess.Game {
    private chess: Chess;
    
    constructor() {
        this.chess = Chess.default();
    }
    
    isCheck(): boolean | chess.Colour {
        return this.chess.isCheck();
    }
    
    turn(): chess.Colour {
        return this.chess.turn;
    }
    
    dests(): Map<chess.Square, chess.Square[]> {
        return chessgroundDests(this.chess);
    }
    
    play(orig: chess.Square, dest: chess.Square) {
        this.chess.play({ from: parseSquare(orig), to: parseSquare(dest) });
    }
}