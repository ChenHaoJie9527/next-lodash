type Awaited<T> = T extends Promise<infer U> ? U : T;
async function promiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [P in keyof T]: Awaited<T[P]> }> {
  const results = await Promise.all(values);
  return results;
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

const p = promiseAll([promise1, promise2, promise3] as const);

export default promiseAll;
