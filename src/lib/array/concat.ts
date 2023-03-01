type Arr = readonly any[];

/**
 * Concat类型体操：
 *  接受两个泛型参数 T， Args, 分别 extends readonly unknown[]
 * 类型编程
 *  1. 对 Args 进行模式匹配 Args extends [infer First, ...infer Reset] 使用infer 分别提取数组第一个参数类型以及剩余参数类型
 *  2. 模式匹配成功后，对以及提取的第一个参数类型 First 进行模式匹配 extends readonly unknown[]
 *  3. 模式匹配成功后，使用递归类型编程 继续调用 Concat 本身， 传入 Concat<[...T, ...First], ...Reset>，即将提取出来的第一个参数类型与T合并为新数组类型
 *  4. 如果第2步未能匹配成功，那么就返回 [...T, ...Args]类型。即表示提取出的 First类型不是一个数组
 *  5. 如果第1步未能匹配成功，则返回 [...T] 类型，即传入Concat的第二个泛型参数不是一个数组
 */
type Concat<
  T extends readonly unknown[],
  Args extends readonly unknown[]
> = Args extends [infer First, ...infer Reset]
  ? First extends readonly unknown[]
    ? Concat<[...T, ...First], Reset>
    : [...T, ...Args]
  : [...T];

type Res1 = Concat<[1, 2, 3], [4]>;
type Res2 = Concat<[1, 2, 3], []>;
type Res3 = Concat<[1, 2, 3], [[1]]>;

function concat<T extends readonly unknown[], U extends readonly unknown[]>(
  arr: T,
  ...args: U
): Concat<[...T], U>;
function concat(arr1: unknown[], ...arr2: unknown[]) {
  return arr1.concat(...arr2);
}

const value = [1,2,3] as const;

const res1 = concat(value) // [1, 2, 3]
const res2 = concat(value, [1,2,3] as const); // [1, 2, 3, 1, 2, 3]
const res3 = concat(value, [[1],54,634] as const); // [1, 2, 3, readonly [1], 54, 634]

export default concat;
