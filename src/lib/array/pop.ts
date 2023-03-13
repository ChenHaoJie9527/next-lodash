type Pop<T extends any[]> = T extends [...infer K, infer U]
  ? [...K]
  : [];
function pop<T extends any[]>(arr: [...T]): Pop<T> {
  if (Array.isArray(arr) && typeof arr !== "undefined" && arr.length) {
    return arr.pop()!;
  } else {
    return []
  }
}

const res1 = pop([1, 2, 3]);

export default pop;
