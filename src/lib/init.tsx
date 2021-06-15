import React from "react";
import * as U from "./utils";

export const WLoader =
  ({ Loader, ws }: { Loader: () => JSX.Element; ws: WebSocket }) =>
  ({
    protocol,
    Component,
  }: {
    protocol: string;
    Component: (props: { ws: WebSocket; protocol: string }) => JSX.Element;
  }) => {
    const [wsReady, setWsReady] = React.useState<boolean>(false);

    if (!wsReady) {
      U.waitForOpenConnection(ws).then((x) => {
        setWsReady(true);
      });

      return <Loader />;
    }

    return <Component ws={ws} protocol={protocol} />;
  };
