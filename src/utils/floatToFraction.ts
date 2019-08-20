export const floatToFraction = (float: number) =>
  Math.floor(float) / (parseFloat((float % 1).toFixed(1)) * 10);
