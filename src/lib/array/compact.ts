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

type Res = Compact<["1", 1, 2, 3, 4, undefined, null, "", 0, typeof NaN]>; // ["1", 1, 2, 3, 4]
const arr = [1, 2, undefined, null, 0, NaN, false, 3];

function compact<T extends readonly unknown[]>(array: T): Compact<T> | [] {
  if (!array.length || !Array.isArray(array) || array === null) {
    return [];
  }
  const res = array.filter((item) => item);
  return res as Compact<T>;
}

export default compact;
