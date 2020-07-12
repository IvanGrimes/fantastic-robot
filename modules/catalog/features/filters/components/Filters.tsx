import React, { FunctionComponent, useCallback, useRef } from 'react';
import { Grid, Button, Icon } from '@components';
import {
  FiltersEnum,
  RequestError,
  selectors as sharedSelectors,
} from '@shared';
import {
  DebouncedTextField,
  DebouncedTextFieldApi,
} from './DebouncedTextField';
import { Switch } from './Switch';
import { Select } from './Select';
import { GridPaper, GridHolder } from './Filters.styles';
import { actions, selectors, SortEnum, ListVariantEnum } from '../model';
import { MetroList, MetroListProps } from './MetroList';
import { DebouncedRange, DebouncedRangeApi } from './DebouncedRange';
import { ParameterList } from './ParameterList';
import { getSortList, getListVariantList } from './utils';

// TODO: Split Filters

export type FilterProps = {
  filters: ReturnType<typeof selectors.getFilters>;
  configError: RequestError;
  config: ReturnType<typeof sharedSelectors.getConfig>;
  metroListError: RequestError;
  update: typeof actions.update;
  isMetroListLoading: boolean;
  metroList: MetroListProps['list'];
  isConfigLoading: boolean;
  clear: typeof actions.clear;
};

const squareMeter = <>&#13217;</>;
const ruble = <>&#8381;</>;
const sortList = getSortList();
const listVariantList = getListVariantList();

export const Filters: FunctionComponent<FilterProps> = ({
  filters,
  config,
  update,
  isMetroListLoading,
  metroList,
  configError,
  metroListError,
  isConfigLoading,
  clear,
}) => {
  const searchTextRef = useRef<null | DebouncedTextFieldApi>(null);
  const areaRef = useRef<null | DebouncedRangeApi>(null);
  const heightRef = useRef<null | DebouncedRangeApi>(null);
  const priceRef = useRef<null | DebouncedRangeApi>(null);
  const handleClear = useCallback(() => {
    const searchText = searchTextRef.current;
    const area = areaRef.current;
    const height = heightRef.current;
    const price = priceRef.current;

    clear((nextState) => {
      if (searchText) {
        searchText.clearWith(nextState[FiltersEnum.textSearch]);
      }
      if (area) {
        area.clearWith(
          nextState[FiltersEnum.area].from,
          nextState[FiltersEnum.area].to
        );
      }
      if (height) {
        height.clearWith(
          nextState[FiltersEnum.height].from,
          nextState[FiltersEnum.height].to
        );
      }
      if (price) {
        price.clearWith(
          nextState[FiltersEnum.price].from,
          nextState[FiltersEnum.price].to
        );
      }
    });
  }, [clear]);

  return (
    <Grid
      container
      item
      md={3}
      lg={2}
      component={GridPaper}
      variant="outlined"
      square
    >
      <GridHolder container xs={12} md={3} lg={2}>
        <Grid container xs={12} spacing={2}>
          <Grid item container justify="flex-end">
            <Button
              variant="outlined"
              endIcon={<Icon name="delete" />}
              disabled={isConfigLoading || isMetroListLoading}
              onClick={() => handleClear()}
            >
              Сбросить
            </Button>
          </Grid>
          <Grid item container>
            <Select
              label="Поиск по"
              isLoading={isConfigLoading}
              list={listVariantList}
              value={filters[FiltersEnum.list]}
              onChange={(value) =>
                update({ [FiltersEnum.list]: value as ListVariantEnum })
              }
            />
          </Grid>
          <Grid item container>
            <Select
              label="Сортировка"
              isLoading={isConfigLoading}
              list={sortList}
              value={filters[FiltersEnum.sort]}
              onChange={(value) =>
                update({ [FiltersEnum.sort]: value as SortEnum })
              }
            />
          </Grid>
          <Grid item container>
            <DebouncedTextField
              label="Поиск по названию"
              ref={searchTextRef}
              isLoading={isConfigLoading}
              value={filters[FiltersEnum.textSearch]}
              onChange={(value) => update({ [FiltersEnum.textSearch]: value })}
            />
          </Grid>
          <Grid item container>
            <DebouncedRange
              name="Площадь"
              ref={areaRef}
              isLoading={isConfigLoading}
              from={filters[FiltersEnum.area].from}
              changeFrom={(value) =>
                update({ [FiltersEnum.area]: { from: value } })
              }
              fromLabel={<>от {squareMeter}</>}
              to={filters[FiltersEnum.area].to}
              changeTo={(value) =>
                update({ [FiltersEnum.area]: { to: value } })
              }
              toLabel={<>до {squareMeter}</>}
            />
          </Grid>
          <Grid item container>
            <DebouncedRange
              name="Высота потолков"
              ref={heightRef}
              isLoading={isConfigLoading}
              from={filters[FiltersEnum.height].from}
              changeFrom={(value) =>
                update({ [FiltersEnum.height]: { from: value } })
              }
              fromLabel={<>от см</>}
              to={filters[FiltersEnum.height].to}
              changeTo={(value) =>
                update({ [FiltersEnum.height]: { to: value } })
              }
              toLabel={<>до см</>}
            />
          </Grid>
          <Grid item container>
            <DebouncedRange
              name="Цена"
              ref={priceRef}
              isLoading={isConfigLoading}
              from={filters[FiltersEnum.price].from}
              changeFrom={(value) =>
                update({ [FiltersEnum.price]: { from: value } })
              }
              fromLabel={<>от {ruble}</>}
              to={filters[FiltersEnum.price].to}
              changeTo={(value) =>
                update({ [FiltersEnum.price]: { to: value } })
              }
              toLabel={<>до {ruble}</>}
            />
          </Grid>
          <Grid item container>
            <ParameterList
              title="Оборудование"
              isLoading={isConfigLoading}
              list={config.equipmentTypes}
              values={filters[FiltersEnum.equipment]}
              onChange={(value) =>
                update({
                  [FiltersEnum.equipment]: {
                    [value]: !filters[FiltersEnum.equipment][value],
                  },
                })
              }
            >
              {configError.message}
            </ParameterList>
          </Grid>
          <Grid item container>
            <ParameterList
              title="Интерьеры"
              isLoading={isConfigLoading}
              list={config.interiors}
              values={filters[FiltersEnum.interior]}
              onChange={(value) =>
                update({
                  [FiltersEnum.interior]: {
                    [value]: !filters[FiltersEnum.interior][value],
                  },
                })
              }
            >
              {configError.message}
            </ParameterList>
          </Grid>
          <Grid item container>
            <ParameterList
              title="Удобства"
              isLoading={isConfigLoading}
              list={config.comforts}
              values={filters[FiltersEnum.comfort]}
              onChange={(value) =>
                update({
                  [FiltersEnum.comfort]: {
                    [value]: !filters[FiltersEnum.comfort][value],
                  },
                })
              }
            >
              {configError.message}
            </ParameterList>
          </Grid>
          <Grid item container>
            <MetroList
              isLoading={isMetroListLoading}
              list={metroList}
              values={filters[FiltersEnum.metro]}
              error={metroListError}
              onChange={(value) =>
                update({
                  [FiltersEnum.metro]: {
                    [value]: !filters[FiltersEnum.metro][value],
                  },
                })
              }
            />
          </Grid>
          <Grid item container>
            <Switch
              isLoading={isConfigLoading}
              label="Оплата онлайн"
              value={filters[FiltersEnum.hasOnlineBooking]}
              onChange={(value) =>
                update({ [FiltersEnum.hasOnlineBooking]: value })
              }
            />
          </Grid>
        </Grid>
      </GridHolder>
    </Grid>
  );
};
