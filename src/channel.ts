// WIP

enum ChannelDef {
  ch1,
  ch2,
}

const ch1Fx = (x: string): void => undefined;

const Channel: Map<ChannelDef, (x: any) => void> = new Map([
  [ChannelDef.ch1, ch1Fx],
]);

const channel2: { [ChannelDef.ch1]: (x: string) => void } = {
  [ChannelDef.ch1]: ch1Fx,
};
