import React from "react";
import ReactDOM from "react-dom";

import { PreWsMessage } from "./lib/ws-message";
import WsWrapper from "./lib/Wrapper";

const url = "ws://localhost:5000";

enum WsChannel {
  useCase1 = "ch1",
}

const w = new PreWsMessage<WsChannel>(url);

const App = () => {
  w.sendMessage({ channel: WsChannel.useCase1, data: { message: "string" } });

  w.ws.onmessage = (x: MessageEvent<string>) => {
    console.log(JSON.parse(x.data));
  };

  return <p>Content</p>;
};

ReactDOM.render(
  <WsWrapper w={w}>
    <App />
  </WsWrapper>,
  document.getElementById("root")
);
