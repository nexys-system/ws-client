import * as U from "./utils.js";
export class WsMessage {
  constructor(ws) {
    this.onMessage = (message) => void 0;
    this.sendMessage = (message) => {
      this.ws.send(JSON.stringify(message));
    };
    this.ws = ws;
    this.ws.onmessage = (x) => {
      const {data, channel} = JSON.parse(x.data);
      this.onMessage("message");
      return {data, channel};
    };
  }
}
export class PreWsMessage extends WsMessage {
  constructor(url, protocol) {
    const ws = new WebSocket(url, protocol);
    super(ws);
    this.wsPromiseReady = U.waitForOpenConnection(ws);
  }
}
