import { Chessground } from 'chessground';
import { Key } from 'chessground/types';

import * as chess from './chess'

export class Board {
    private game: chess.Game;

    constructor(game: chess.Game) {
        this.game = game;
    }

    start(el: HTMLElement) {
        const ground = Chessground(el, {
            highlight: {
                check: true
            },
            draggable: {
                showGhost: true
            },
            movable: {
                color: 'white',
                free: false,
                dests: this.game.dests(),
            },
        });
        
        ground.set({
            movable: {
                events: {
                    after: (orig: Key, dest: Key) => {
                        this.game.play(orig as chess.Square, dest as chess.Square);
                        ground.set({
                            turnColor: this.game.turn(),
                            movable: {
                                color: this.game.turn(),
                                dests: this.game.dests()
                            },
                            check: this.game.isCheck()
                        });
                    }
                }
            }
        });
    }
}