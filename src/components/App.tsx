import * as React from "react";

export interface AppProps {
  name: string
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        Oh hai, {this.props.name}
      </div>
    );
  }
}
