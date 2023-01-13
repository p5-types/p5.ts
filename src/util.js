/// @ts-check

/**
 * @param {any[]} arr
 */
function flatten(arr) {
  return arr.flat(Infinity);
}

/**
 * @param {string | number} num
 * @param {number} length
 */
function padNatString(num, length) {
  return `${num}`.padStart(length, "0");
}

function getCurrentISO8601Date() {
  const now = new Date();
  return `${now.getUTCFullYear()}-${padNatString(
    now.getUTCMonth() + 1,
    2,
  )}-${padNatString(now.getUTCDate(), 2)}`;
}

/**
 * @param {number} n
 * @param {any} singular
 * @param {any} plural
 */
function pluralize(n, singular, plural) {
  if (n === 1) {
    return `1 ${singular}`;
  }
  return `${n} ${plural}`;
}

/**
 * @param {any} log
 * @param {any[]} args
 */
function conditionalLog(log, ...args) {
  if (log) {
    console.log(...args);
  }
}

module.exports = {
  conditionalLog,
  flatten,
  getCurrentISO8601Date,
  padNatString,
  pluralize,
};
