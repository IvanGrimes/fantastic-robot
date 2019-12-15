export const getPriceType = (priceType = '0') =>
  new Array(Number(priceType)).fill('$').join('');
