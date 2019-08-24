/**
 * @function
 * @param {number} number - Numeral for which you want get ending.
 * @param {array.<string>} declensions - Array of word declensions for 1, 2 and 5.
 * @return {string} declension for numeral passed in argument number;
 */

export const getDeclension = (number: number, declensions: string[]) => {
  const i = number % 10;

  if (number >= 11 && number <= 19) {
    return declensions[2];
  }

  switch (i) {
    case 1:
      return declensions[0];
    case 2:
    case 3:
    case 4:
      return declensions[1];
    default:
      return declensions[2];
  }
};
