import React from "../_snowpack/pkg/react.js";
import * as U from "./utils.js";
export const WLoader = ({Loader, ws}) => ({
  protocol,
  Component
}) => {
  const [wsReady, setWsReady] = React.useState(false);
  if (!wsReady) {
    U.waitForOpenConnection(ws).then((x) => {
      setWsReady(true);
    });
    return /* @__PURE__ */ React.createElement(Loader, null);
  }
  return /* @__PURE__ */ React.createElement(Component, {
    ws,
    protocol
  });
};
