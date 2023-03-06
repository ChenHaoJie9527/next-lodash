export type NotEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? false
  : true;

type IsEqual<T, K> = NotEqual<T, K> extends true ? true : false;

function isEqual<T extends any, K extends T>(a1: T, a2: K): IsEqual<T, K> {
  
}

function isObject<T>(t1: T) {
  return typeof t1 === "object" && t1 !== null;
}

export default isEqual;
