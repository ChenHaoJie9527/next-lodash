type Last<T extends readonly unknown[]> = T extends readonly [
  ...unknown[],
  infer K
]
  ? K
  : T[0] | undefined;

const last = <T extends readonly any[]>(args: T): Last<T> => {
  return args[args.length - 1];
};

const lastVal = last([1, 2] as const);
const r1 = last([1, 2, 3]);
const r2 = last([1, 2, "asd"]);

export default last;
