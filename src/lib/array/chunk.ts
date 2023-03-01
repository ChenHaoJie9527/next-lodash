/**
 * Creates an array of elements split into groups the length of chunkSize.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The array to process.
 * @param {number} [chunkSize=1] - The length of each chunk.
 * @param {T[][]} [cache=[]] - The array to store the chunked elements.
 * @returns {T[][]} - The new array of chunks.
 *
 * @example
 *
 * chunk([1, 2, 3, 4, 5], 2);
 * // returns [[1, 2], [3, 4], [5]]
 *
 * chunk([1, 2, 3, 4, 5], 3);
 * // returns [[1, 2, 3], [4, 5]]
 *
 * chunk([1, 2, 3, 4, 5], 0);
 * // returns []
 *
 * chunk([1, 2, 3, 4, 5] as const,, 2)
 * // returns [[1, 2], [3, 4], [5]]
 */
type Chunk<
  Arr extends unknown[],
  ItemLen extends number = 1,
  CurItem extends unknown[] = [],
  Res extends unknown[] = []
> = ItemLen extends 0
  ? Res
  : Arr extends [infer First, ...infer Rest]
  ? CurItem["length"] extends ItemLen
    ? Chunk<Rest, ItemLen, [First], [...Res, CurItem]>
    : Chunk<Rest, ItemLen, [...CurItem, First], Res>
  : [...Res, CurItem];

type Chunk1<T extends unknown[], L extends number = 1> = L extends 0
  ? []
  : [...T][];

function chunk<T>(arr: T[]): Chunk1<T[], 1>;
function chunk<T, K extends number>(arr: T[], size: K): Chunk1<T[], K>;
function chunk<
  T extends readonly unknown[],
  I extends number,
  R extends unknown[]
>(arr: T, size: I, cache: R): Chunk<[...T], I, [], R>;
function chunk<T extends readonly unknown[], I extends number>(
  arr: T,
  size: I
): Chunk<[...T], I>;
function chunk<T extends readonly unknown[]>(arr: T): Chunk<[...T]>;
function chunk(
  arr: readonly unknown[],
  size: number = 1,
  cache: unknown[] = []
) {
  const tmp = [...arr];
  const maxSize = Math.max(size, 0);
  const lent = tmp === null ? 0 : tmp.length;
  if (!lent || maxSize < 1) {
    return cache;
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(tmp.length / maxSize));

  while (index < lent) {
    result[resIndex++] = tmp.slice(index, (index += maxSize));
  }
  cache.push(...result);
  return cache;
}
const value = [1, 2, 3, 4, 5, 6, 7] as const;
const value1 = [1, 2, 3, 4, 5, "a"];
const res1 = chunk(value1);
const res2 = chunk(value1, 2);

type Result = Chunk<[1, 2, 3, 4, 5]>;

const a = chunk(value, 1);
const b = chunk(value, 2);
const c = chunk(value, 3);
const d = chunk(value);

export default chunk;
