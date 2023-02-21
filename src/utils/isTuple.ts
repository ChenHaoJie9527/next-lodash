export type IsTuple = <T extends unknown[]>(source: [...T]) => T;

// const isTuple: F = (source) => {
//   return source;
// };

// const res = isTuple([1, "2", true, null, undefined, []]); // [number, string, boolean, null, undefined, never[]]
// const s = [1, "2", true, null, undefined, []];
// const res1 = isTuple(s); // (string | number | boolean | never[] | null | undefined)[]

const arrayToTuple: IsTuple = (source) => {
  return source;
};

const res = arrayToTuple([1, '2', false])
export { arrayToTuple };
