function tail<T extends readonly unknown[]>(arr: readonly [any, ...T]): T;
function tail(arr: readonly unknown[]) {
  const [_, ...reset] = arr;
  return reset;
}

// tuple
const myTuple = [1, 2, 3, 4] as const;

const res1 = tail(myTuple); // [2,3,4]

const myArray = [1, "hello", false, {}, [1, 2, 3, { name: "world" }]] as const;

const res2 = tail(myArray);

const res4 = tail([false, 1, 2, 3, "a"]);
export default tail;
