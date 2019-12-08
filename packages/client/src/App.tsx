import React, { FC } from "react";

export interface AppProps {}

const App: FC<AppProps> = props => {
  return (
    <div>
      <span>Hello</span>
      <h1>This is the App@@@</h1>
    </div>
  );
};

export default App;
