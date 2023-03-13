type Last<T extends readonly unknown[]> = T extends readonly [
  ...unknown[],
  infer K
]
  ? K
  : T[0] | undefined;

type Last1<T extends any[]> = T extends [...infer K, infer U] ? U : T[number];

function last<T extends any[]>(args: T): Last1<T>;
function last<T extends readonly any[]>(args: T): Last<T>;
function last(args = []) {
  return args.length ? args[args.length - 1] : undefined;
}

const lastVal = last([1, 2] as const);
const r1 = last([1, 2, 3] as const);
const r2 = last([1, 2, "asd"] as const);

export default last;
