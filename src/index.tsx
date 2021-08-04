import * as ReactDOM from "react-dom";

import { App } from "./app";

import * as ivanchuk from "./ivanchuk";
import { History } from "./history";

const game = new ivanchuk.Game();
ReactDOM.render(<App game={game} history={new History()} />, document.getElementById("root"));
