import React from "react";
import ReactDOM from "react-dom";

import { PreWsMessage } from "./lib/ws-message";
import WsWrapper from "./lib/Wrapper";
import { getWsUrl } from "./utils";

enum WsChannel {
  useCase1 = "ch1",
}

const w = new PreWsMessage<WsChannel>(getWsUrl());

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
