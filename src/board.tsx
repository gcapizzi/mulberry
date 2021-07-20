import * as React from "react";

import * as chess from "./chess";
import * as chessground from "./chessground";

type BoardProps = {
  position: chess.Position;
  onMove: (orig: chess.Square, dest: chess.Square) => void;
};

export class Board extends React.Component<BoardProps> {
  constructor(props: BoardProps) {
    super(props);
  }

  render() {
    return (
      <chessground.Board
        config={{
          check: this.props.position.isCheck(),
          movable: {
            color: this.props.position.turn(),
            dests: this.props.position.dests(),
            events: {
              after: (orig: chess.Square, dest: chess.Square) => {
                this.props.onMove(orig, dest);
                this.forceUpdate();
              },
            },
            free: false,
          },
          turnColor: this.props.position.turn(),
        }}
      />
    );
  }
}
