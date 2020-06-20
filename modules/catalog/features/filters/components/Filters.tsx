import React, { FunctionComponent } from 'react';
import { Grid } from '@components';
import {
  FiltersEnum,
  RequestError,
  selectors as sharedSelectors,
} from '@shared';
import { DebouncedTextField } from './DebouncedTextField';
import { DebouncedSwitch } from './DebouncedSwitch';
import { Select } from './Select';
import { GridPaper } from './Filters.styles';
import { actions, selectors, SortEnum, ListVariantEnum } from '../model';
import { MetroList, MetroListProps } from './MetroList';
import { DebouncedRange } from './DebouncedRange';
import { ParameterList } from './ParameterList';
import { getSortList, getListVariantList } from './utils';

export type FilterProps = {
  filters: ReturnType<typeof selectors.getFilters>;
  configError: RequestError;
  config: ReturnType<typeof sharedSelectors.getConfig>;
  metroListError: RequestError;
  updateFilters: typeof actions.update;
  isMetroListLoading: boolean;
  metroList: MetroListProps['list'];
  isConfigLoading: boolean;
};

const squareMeter = <>&#13217;</>;
const ruble = <>&#8381;</>;
const sortList = getSortList();
const listVariantList = getListVariantList();

export const Filters: FunctionComponent<FilterProps> = ({
  filters,
  config,
  updateFilters,
  isMetroListLoading,
  metroList,
  configError,
  metroListError,
  isConfigLoading,
}) => (
  <Grid item md={3} lg={2} component={GridPaper} variant="outlined" square>
    <Grid container spacing={2}>
      <Grid item container>
        <Select
          label="Поиск по"
          isLoading={isConfigLoading}
          list={listVariantList}
          value={filters[FiltersEnum.list]}
          onChange={(value) =>
            updateFilters({ [FiltersEnum.list]: value as ListVariantEnum })
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
            updateFilters({ [FiltersEnum.sort]: value as SortEnum })
          }
        />
      </Grid>
      <Grid item container>
        <DebouncedTextField
          label="Поиск по названию"
          isLoading={isConfigLoading}
          value={filters[FiltersEnum.textSearch]}
          onChange={(value) =>
            updateFilters({ [FiltersEnum.textSearch]: value })
          }
        />
      </Grid>
      <Grid item container>
        <DebouncedRange
          name="Площадь"
          isLoading={isConfigLoading}
          from={filters[FiltersEnum.area].from}
          changeFrom={(value) =>
            updateFilters({ [FiltersEnum.area]: { from: value } })
          }
          fromLabel={<>от {squareMeter}</>}
          to={filters[FiltersEnum.area].to}
          changeTo={(value) =>
            updateFilters({ [FiltersEnum.area]: { to: value } })
          }
          toLabel={<>до {squareMeter}</>}
        />
      </Grid>
      <Grid item container>
        <DebouncedRange
          name="Высота потолков"
          isLoading={isConfigLoading}
          from={filters[FiltersEnum.height].from}
          changeFrom={(value) =>
            updateFilters({ [FiltersEnum.height]: { from: value } })
          }
          fromLabel={<>от см</>}
          to={filters[FiltersEnum.height].to}
          changeTo={(value) =>
            updateFilters({ [FiltersEnum.height]: { to: value } })
          }
          toLabel={<>до см</>}
        />
      </Grid>
      <Grid item container>
        <DebouncedRange
          name="Цена"
          isLoading={isConfigLoading}
          from={filters[FiltersEnum.price].from}
          changeFrom={(value) =>
            updateFilters({ [FiltersEnum.price]: { from: value } })
          }
          fromLabel={<>от {ruble}</>}
          to={filters[FiltersEnum.price].to}
          changeTo={(value) =>
            updateFilters({ [FiltersEnum.price]: { to: value } })
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
            updateFilters({
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
            updateFilters({
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
            updateFilters({
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
            updateFilters({
              [FiltersEnum.metro]: {
                [value]: !filters[FiltersEnum.metro][value],
              },
            })
          }
        />
      </Grid>
      <Grid item container>
        <DebouncedSwitch
          isLoading={isConfigLoading}
          label="Оплата онлайн"
          value={filters[FiltersEnum.hasOnlineBooking]}
          onChange={(value) =>
            updateFilters({ [FiltersEnum.hasOnlineBooking]: value })
          }
        />
      </Grid>
    </Grid>
  </Grid>
);
