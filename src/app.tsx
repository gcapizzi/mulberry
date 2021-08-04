import * as React from "react";

import * as chess from "./chess";
import { Board } from "./board";
import { History } from "./history";

type Props = {
  game: chess.Game;
  history: History;
};

type State = {
  game: chess.Game;
  history: History;
};

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      game: props.game,
      history: props.history,
    };
  }

  render() {
    const onMove = (orig: chess.Square, dest: chess.Square) => {
      this.setState((state) => {
        return {
          history: { moves: [...state.history.moves, "x0"] },
          game: state.game.play(orig as chess.Square, dest as chess.Square),
        };
      });
    };

    return (
      <div>
        <Board position={this.state.game} onMove={onMove} />
        <ul>
          {this.state.history.moves.map((move) => (
            <li>{move}</li>
          ))}
        </ul>
      </div>
    );
  }
}
