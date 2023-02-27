type Arr = readonly any[];

function concat<T extends Arr, U extends Arr = []>(arr1: T, ...arr2: U): T[] {
  let _array: T[] = [];
  _array = _array.concat(arr1);
  arr2.forEach(item => {
    _array = _array.concat(item);
  })

  return [..._array];
}

export default concat;