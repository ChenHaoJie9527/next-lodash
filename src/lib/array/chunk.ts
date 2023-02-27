function chunk<T>(arr: readonly T[], size: number = 1, cache: T[][] = []): T[][] {
  const tmp = [...arr];
  const lent = arr === null ? 0 : arr.length;
  if (!lent || size <= 0) {
    return cache;
  }

  while (tmp.length) {
    cache.push(tmp.slice(0, size));
  }
  return cache;
}
const arr1 = chunk(["a", "b", "c", 1] as const, 2);
console.log("arr1", arr1);
export default chunk;
