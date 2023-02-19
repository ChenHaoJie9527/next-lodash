type Head<T extends readonly unknown[]> = T extends readonly [
  infer First,
  ...infer Rest
]
  ? First
  : T[0] | undefined;

const head = <T extends readonly unknown[]>(array: T): Head<T> => {
  const res = array[0] as Head<T>;
  return res;
};

const res = head(["hello", "world"]);
const res1 = head(["hello", "world", 100]);
const res2 = head(["hello", 100]);
const res3 = head([])
const res4 = head([1,'2'] as const);
const res5 = head([[1,2], [3,4]] as const);
const res6 = head([{name: 'ccc', age: 1}, 1, undefined] as const);

export default head;


