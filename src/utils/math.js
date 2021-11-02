/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export const add = (a = 0, b = 0) => Number(a) + Number(b);

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export const diff = (a, b) => a - b;

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export const div = (a, b) => {
  if (b === 0) {
    throw new Error('Error with div');
  }
  return a / b;
};
