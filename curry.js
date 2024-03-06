/** @param {typeof log} f */
function curry(f) {
  /** @param {Date} date */
  return function (date) {
    /** @param {string} importance */
    return function (importance) {
      /** @param {string} message */
      return function (message) {
        f(date, importance, message);
      };
    };
  };
}

/**
 * @param {Date} date
 * @param {string} importance
 * @param {string} message
 */
function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`,
  );
}

const curriedLog = curry(log);
curriedLog(new Date())("STRONG")("Our site is down");

const curriedNow = curriedLog(new Date());
curriedNow("STRONG")("Our site is down");
