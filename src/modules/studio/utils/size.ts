export type Size = 'small' | 'normal' | 'large' | 'extraLarge';

export const getSize = (size: Size) => {
  switch (size) {
    case 'extraLarge':
      return 'h5';
    case 'large':
      return 'h6';
    case 'normal':
      return 'body1';
    case 'small':
      return 'body2';
    default:
      return 'body1';
  }
};
