type Falsey = null | undefined | false | "" | 0 | 0n;
type NotEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? false
  : true;

type Compact<
  T extends readonly unknown[],
  Res extends unknown[] = []
> = T extends readonly [infer F, ...infer Reset]
  ? Compact<
      Reset,
      F extends Falsey
        ? Res
        : NotEqual<F, number> extends false
        ? Res
        : [...Res, F]
    >
  : Res;

const res = ["1", 1, 2, 3, 4, undefined, null, "", 0, NaN] as const;
type Res = Compact<typeof res>; // ["1", 1, 2, 3, 4]

function compact<T extends readonly unknown[]>(array: T): Compact<T> | [] {
  if (!array.length || !Array.isArray(array) || array === null) {
    return [];
  }
  const res = array.filter((item) => item);
  return res as Compact<T>;
}

export default compact;
