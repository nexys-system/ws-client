const url = "ws://gfd";
const ws: WebSocket = new WebSocket(url);

enum WsChannel {
  useCase1,
  useCase2,
}

interface WsMessageShape<A> {
  data: A;
  channel: WsChannel;
}

interface WsMessageEncrypted {
  data: string;
  channel: WsChannel;
}

const secret = "";

const encrypt = (message: string, secret: string) => "";
const decrypt = (ciphertext: string, secret: string) => "";

const sendMessage = <A>(message: WsMessageShape<A>) => {
  const enc: string = encrypt(JSON.stringify(message), secret);

  ws.send(enc);
};

ws.onmessage = <A>(x: MessageEvent<string>): WsMessageShape<A> => {
  const ciphertext = x.data;
  const data: WsMessageShape<A> = JSON.parse(decrypt(ciphertext, secret));
  return data;
};

class WsMessage {
  ws: WebSocket;
  secret: string;

  constructor(ws: WebSocket, secret: string) {
    this.ws = ws;
    this.secret = secret;

    this.ws.onmessage = <A>(x: MessageEvent<string>): WsMessageShape<A> => {
      const data: WsMessageShape<A> = JSON.parse(decrypt(x.data, this.secret));
      return this.onMessage(data);
    };
  }

  onMessage = <A>(data: WsMessageShape<A>) => undefined;

  sendMessage = <A>(message: WsMessageShape<A>) => {
    const enc: string = encrypt(JSON.stringify(message), this.secret);

    this.ws.send(enc);
  };
}
