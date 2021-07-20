import * as React from "react";

import * as chess from "./chess";
import { Board } from "./board";

type Props = {
  game: chess.Game;
};

export class App extends React.Component<Props> {
  render() {
    const onMove = (orig: chess.Square, dest: chess.Square) => {
      this.props.game.play(orig as chess.Square, dest as chess.Square);
    };

    return (
      <div>
        <Board position={this.props.game} onMove={onMove} />
      </div>
    );
  }
}
