import { createSelectorCreator, defaultMemoize } from 'reselect';
import dequal from 'dequal';

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  dequal
);
