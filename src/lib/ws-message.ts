import * as U from "./utils";

enum WsChannel {
  useCase1,
  useCase2,
}

interface WsMessageShape<A> {
  data: A;
  channel: WsChannel;
}

export class WsMessage {
  ws: WebSocket;

  constructor(ws: WebSocket) {
    this.ws = ws;

    this.ws.onmessage = <A>(x: MessageEvent<string>): WsMessageShape<A> => {
      const { data, channel }: WsMessageShape<A> = JSON.parse(x.data);
      return { data, channel };
    };
  }

  sendMessage = <A>(message: WsMessageShape<A>): void => {
    this.ws.send(JSON.stringify(message));
  };
}

export class PreWsMessage extends WsMessage {
  wsPromiseReady: Promise<void>;

  constructor(url: string, protocol?: string | string[]) {
    const ws = new WebSocket(url, protocol);
    super(ws);

    this.wsPromiseReady = U.waitForOpenConnection(ws);
  }
}
