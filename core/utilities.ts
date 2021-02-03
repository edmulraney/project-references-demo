export function makeRandomName(a: boolean) {
  return "a" + a;
}

export function lastElementOf<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[arr.length - 1];
}
