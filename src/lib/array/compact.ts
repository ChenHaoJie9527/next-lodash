type Falsey = null | undefined | false | "" | 0 | 0n;
type Compact<T extends readonly unknown[], K = Falsey, C = []> = T extends [
  infer F,
  ...infer U
]
  ? F extends K
    ? Compact<[...U], K, [F]>
    : Compact<[...U], K, []>
  : never;
type Res = Compact<[1, 0, 1, false, 2, "", 3]>;

function compact() {}

export default compact;
