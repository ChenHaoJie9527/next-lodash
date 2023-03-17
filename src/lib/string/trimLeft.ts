export type TrimLeft<T extends string> = T extends `${" " | "\n" | "\t"}${infer U}`
  ? TrimLeft<U>
  : T;
type Test1 = TrimLeft<"   Hello World  ">; // "Hello World  "
type Test2 = TrimLeft<"  \n\t   Hello World  ">; // "Hello World  "
type Test3 = TrimLeft<"Hello World  ">; // "Hello World  "
type Test4 = TrimLeft<"">; // ""

function trimLeft<S extends string>(value: S): TrimLeft<S> {
  if (value[0] === " " || value[0] === "\n" || value[0] === "\t") {
    return trimLeft(value.slice(1)) as TrimLeft<S>;
  }
  return value as TrimLeft<S>;
}

export default trimLeft;
