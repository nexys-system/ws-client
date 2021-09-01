import React from "../_snowpack/pkg/react.js";
const WsWrapper = ({
  children,
  w,
  Loader = () => /* @__PURE__ */ React.createElement("p", null, "Loading...")
}) => {
  const [isReady, setReady] = React.useState(false);
  if (isReady) {
    return children;
  }
  w.wsPromiseReady.then((x) => {
    setReady(true);
  });
  return /* @__PURE__ */ React.createElement(Loader, null);
};
export default WsWrapper;
