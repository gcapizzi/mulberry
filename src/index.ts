import { Chessground } from 'chessground';
import { Chess } from 'chessops/chess';
import { chessgroundDests } from 'chessops/compat';
import { parseSquare } from 'chessops/util';
import { Api } from 'chessground/api';
import { Key } from 'chessground/types';

const config = {};
const el = document.querySelector('.cg-wrap') as HTMLElement
const chess = Chess.default();

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
        dests: chessgroundDests(chess),
    },
});
ground.set({
    movable: {
        events: {
            after: playOtherSide(ground, chess)
        }
    }
});

function playOtherSide(ground: Api, chess: Chess) {
    return (orig: Key, dest: Key) => {
        chess.play({from: parseSquare(orig), to: parseSquare(dest)});
        ground.set({
            turnColor: chess.turn,
            movable: {
                color: chess.turn,
                dests: chessgroundDests(chess)
            },
            check: chess.isCheck()
        });
    };
}