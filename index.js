import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {PreWsMessage} from "./lib/ws-message.js";
import WsWrapper from "./lib/Wrapper.js";
import {getWsUrl} from "./utils.js";
var WsChannel;
(function(WsChannel2) {
  WsChannel2["useCase1"] = "ch1";
})(WsChannel || (WsChannel = {}));
const w = new PreWsMessage(getWsUrl());
const App = () => {
  w.sendMessage({channel: WsChannel.useCase1, data: {message: "string"}});
  w.ws.onmessage = (x) => {
    console.log(JSON.parse(x.data));
  };
  return /* @__PURE__ */ React.createElement("p", null, "Content");
};
ReactDOM.render(/* @__PURE__ */ React.createElement(WsWrapper, {
  w
}, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
