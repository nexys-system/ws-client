import React from "react";
import { PreWsMessage } from "./ws-message";

const WsWrapper = <WsMessage,>({
  children,
  w,
}: {
  children: JSX.Element;
  w: PreWsMessage<WsMessage>;
}) => {
  const [isReady, setReady] = React.useState<boolean>(false);

  w.wsPromiseReady.then((x) => {
    setReady(true);
  });

  if (isReady) {
    return children;
  }

  return <p>Loading...</p>;
};

export default WsWrapper;
