export const getPriceSegment = (priceType = '0') =>
  new Array(Number(priceType)).fill('$');
