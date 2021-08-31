import React from "react";
import ReactDOM from "react-dom";

import { PreWsMessage } from "./lib/ws-message";

import WsWrapper from "./lib/Wrapper";

const url = "ws://localhost:5000";
const w = new PreWsMessage(url);

const App = () => {
  return <p>Content</p>;
};

ReactDOM.render(
  <WsWrapper w={w}>
    <App />
  </WsWrapper>,
  document.getElementById("root")
);
