import { SortEnum } from '../model';
import { ListVariantEnum } from '../../../model';
import { enumToArray } from '@utils';

export const getSortList = () => {
  const sortNames = {
    [SortEnum.priceAsc]: 'По цене',
    [SortEnum.nameAsc]: 'По названию',
  };

  return enumToArray(SortEnum).map((sort) => {
    const s = sort as SortEnum;

    return {
      label: sortNames[s],
      value: s,
    };
  });
};
export const getListVariantList = () => {
  const variants = {
    [ListVariantEnum.studio]: 'Студиям',
    [ListVariantEnum.room]: 'Залам',
  };

  return enumToArray(ListVariantEnum).map((variant) => {
    const v = variant as ListVariantEnum;

    return {
      label: variants[v],
      value: v,
    };
  });
};
