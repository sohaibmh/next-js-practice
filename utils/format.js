/**
 * Display the number with two decimal places
 * @param {string | number} number
 */

export const twoDecimals = (number) => {
  return parseFloat(number).toFixed(2);
};
