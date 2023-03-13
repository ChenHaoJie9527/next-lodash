type Pop<T extends readonly any[]> = T extends [...infer K, infer U]
  ? [...K]
  : [];

function pop<T extends readonly any[]>(arr: readonly [...T]): Pop<T>;
function pop(arr: readonly any[] = []) {
  if (Array.isArray(arr) && typeof arr !== "undefined" && arr.length) {
    const lent = arr.length - 1;
    const list = arr.slice(0, lent);
    return list;
  } else {
    return [];
  }
}

const res1 = pop([1, 2, 3]);

export default pop;
