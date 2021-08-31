import * as U from "./utils";

interface WsMessageShape<A, WsChannel> {
  data: A;
  channel: WsChannel;
}

export class WsMessage<WsChannel> {
  ws: WebSocket;

  constructor(ws: WebSocket) {
    this.ws = ws;

    this.ws.onmessage = <A>(
      x: MessageEvent<string>
    ): WsMessageShape<A, WsChannel> => {
      const { data, channel }: WsMessageShape<A, WsChannel> = JSON.parse(
        x.data
      );
      this.onMessage("message");
      return { data, channel };
    };
  }

  onMessage = (message: any) => undefined;

  sendMessage = <A>(message: WsMessageShape<A, WsChannel>): void => {
    this.ws.send(JSON.stringify(message));
  };
}

export class PreWsMessage<WsChannel> extends WsMessage<WsChannel> {
  wsPromiseReady: Promise<void>;

  constructor(url: string, protocol?: string | string[]) {
    const ws = new WebSocket(url, protocol);
    super(ws);

    this.wsPromiseReady = U.waitForOpenConnection(ws);
  }
}
