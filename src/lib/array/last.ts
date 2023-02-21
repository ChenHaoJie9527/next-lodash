const last = <T extends unknown[]>(array: T): T[0] | undefined => {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
};

export default last;
