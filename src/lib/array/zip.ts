type Zip<T extends unknown[], K extends unknown[]> = T extends [
  infer First1,
  ...infer Rest1
]
  ? K extends [infer First2, ...infer Rest2]
    ? [[First1, First2], ...Zip<Rest1, Rest2>]
    : []
  : [];

// type Res = Zip<[1,2,3], [4,5,6]>; // [[1, 4], [2, 5], [3, 6]]

type UnReadonly<T> = {
  -readonly [K in keyof T]: T[K];
};
function zip(target: unknown[], source: unknown[]): unknown[];
function zip<T extends readonly unknown[], K extends readonly unknown[]>(
  target: T,
  source: K
): Zip<UnReadonly<T>, UnReadonly<K>>;
function zip(target: unknown[], source: unknown[]) {
  if (!target.length || !source.length) return [];

  const [one, ...rest1] = target;
  const [other, ...rest2] = source;

  return [[one, other], ...zip(rest1, rest2)];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const res = zip([1, 2, 3] as const, [4, 5, 6] as const); // [[1, 4], [2, 5], [3, 6]]
const res1 = zip(arr1, arr2); // unknown[]

export default zip;
