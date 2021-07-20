import * as ReactDOM from "react-dom";

import { App } from "./app";

import * as chessops from "./chessops";

const game = new chessops.Game();

ReactDOM.render(<App game={game} />, document.getElementById("root"));
