export function flatten(arr: any[]) {
  return arr.flat(Infinity);
}

export function padNatString(num: string | number, length: number) {
  return `${num}`.padStart(length, "0");
}

export function getCurrentISO8601Date() {
  const now = new Date();
  return `${now.getUTCFullYear()}-${padNatString(
    now.getUTCMonth() + 1,
    2,
  )}-${padNatString(now.getUTCDate(), 2)}`;
}


export function pluralize(n: number, singular: any, plural: any) {
  if (n === 1) {
    return `1 ${singular}`;
  }
  return `${n} ${plural}`;
}


export function conditionalLog(log: boolean, ...args: any[]) {
  if (log) {
    console.log(...args);
  }
}
