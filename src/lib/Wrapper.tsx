import React from "react";
import { PreWsMessage } from "./ws-message";

const WsWrapper = <WsMessage,>({
  children,
  w,
  Loader = () => <p>Loading...</p>,
}: {
  children: JSX.Element;
  w: PreWsMessage<WsMessage>;
  Loader?: () => JSX.Element;
}) => {
  const [isReady, setReady] = React.useState<boolean>(false);

  if (isReady) {
    return children;
  }

  w.wsPromiseReady.then((x) => {
    setReady(true);
  });

  return <Loader />;
};

export default WsWrapper;
