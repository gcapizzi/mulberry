import * as React from "react";
import { Chessground } from "chessground";
import { Config } from "chessground/config";
import { Api } from "chessground/api";

type Props = {
  config: Config;
};

export class Board extends React.Component<Props> {
  private el: HTMLElement;
  private api: Api;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.api = Chessground(this.el, this.props.config);
  }

  componentDidUpdate() {
    this.api.set(this.props.config);
  }

  componentWillUnmount() {
    this.api.destroy();
  }

  render() {
    return <div className=".cg-wrap" ref={(el) => (this.el = el)}></div>;
  }
}
