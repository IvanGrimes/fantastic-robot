import { FiltersEnum } from '@shared';

type RangeFilter = { from: number; to: number };
type IdFilter = { [key: string]: boolean };
type FilterValue = string | number | boolean | IdFilter | RangeFilter;

function isRangeFilter(target: FilterValue): target is RangeFilter {
  return Boolean(typeof target === 'object' && target.from && target.to);
}

function isIdFilter(target: FilterValue): target is IdFilter {
  return Boolean(
    typeof target === 'object' && !('from' in target) && !('to' in target)
  );
}

const filtersDictionary: { [key in FiltersEnum]: string | [string, string] } = {
  [FiltersEnum.area]: ['areaMin', 'areaMax'],
  [FiltersEnum.city]: 'city',
  [FiltersEnum.comfort]: 'comfortIds',
  [FiltersEnum.date]: ['dateStart', 'dateEnd'],
  [FiltersEnum.equipment]: 'equipmentIds',
  [FiltersEnum.hasOnlineBooking]: FiltersEnum.hasOnlineBooking,
  [FiltersEnum.height]: ['heightMin', 'heightMax'],
  [FiltersEnum.interior]: 'interiorIds',
  [FiltersEnum.metro]: 'metroIds',
  [FiltersEnum.price]: ['priceMin', 'priceMax'],
  [FiltersEnum.textSearch]: 'search',
  [FiltersEnum.sort]: 'sort',
  [FiltersEnum.list]: '',
};

export const transformFilters = (filters: any) =>
  Object.entries(filters).reduce((acc, item) => {
    const [prop, value] = item as [
      FiltersEnum,
      string | number | boolean | IdFilter | RangeFilter
    ];
    const name = filtersDictionary[prop];

    if (!name) {
      return acc;
    }

    if (Array.isArray(name)) {
      if (isRangeFilter(value)) {
        const [min, max] = name;

        return {
          ...acc,
          [min]: Number(value.from),
          [max]: Number(value.to),
        };
      }
    } else if (isIdFilter(value)) {
      return {
        ...acc,
        [name]: Object.entries(value)
          .filter(([, v]) => v)
          .map(([id]) => id),
      };
    } else {
      return {
        ...acc,
        [name]: value,
      };
    }

    return acc;
  }, {});
