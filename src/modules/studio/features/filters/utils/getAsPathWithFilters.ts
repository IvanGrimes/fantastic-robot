import { mergeDeepRight } from 'ramda';
import { parseFilters } from './parseFilters';
import { getNonEmptyValues } from './getNonEmptyValues';
import { getFilters } from '../model/selectors';

const getAbsAsPath = (asPath: string) => asPath.split('?')[0];

export const getAsPathWithFilters = (
  asPath: string,
  appliedFilters: ReturnType<typeof getFilters>
) => {
  const absAsPath = getAbsAsPath(asPath);
  const prevFilters = parseFilters(asPath);
  const nextFilters = mergeDeepRight(
    prevFilters,
    getNonEmptyValues(appliedFilters)
  );
  const hasFilters = Object.values(getNonEmptyValues(appliedFilters)).length;

  return hasFilters
    ? `${absAsPath}?filters=${JSON.stringify(nextFilters)}`
    : absAsPath;
};
