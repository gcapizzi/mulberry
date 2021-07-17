import * as chessops from './chessops'
import * as chessground from './chessground'

const el = document.querySelector('.cg-wrap') as HTMLElement;
const game = new chessops.Game();
const board = new chessground.Board(game);

board.start(el);