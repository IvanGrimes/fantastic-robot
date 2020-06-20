import React, { FunctionComponent } from 'react';
import { Grid } from '@components';
import {
  selectors as sharedSelectors,
  FiltersEnum,
  RequestError,
} from '@shared';
import { actions, selectors } from '../model';
import { DebouncedRange } from './DebouncedRange';
import { DebouncedSwitch } from './DebouncedSwitch';
import { DebouncedTextField } from './DebouncedTextField';
import { MetroList, MetroListProps } from './MetroList';
import { ParameterList } from './ParameterList';

export type FiltersSuccessProps = {
  filters: ReturnType<typeof selectors.getFilters>;
  configError: RequestError;
  config: ReturnType<typeof sharedSelectors.getConfig>;
  metroListError: RequestError;
  updateFilters: typeof actions.update;
  isMetroListLoading: boolean;
  metroList: MetroListProps['list'];
};

const squareMeter = <>&#13217;</>;
const ruble = <>&#8381;</>;

export const FiltersSuccess: FunctionComponent<
  FiltersSuccessProps & { isLoading: boolean }
> = ({
  filters,
  updateFilters,
  config,
  isMetroListLoading,
  metroList,
  configError,
  metroListError,
  isLoading,
}) => (
  <Grid container spacing={2}>
    <Grid item container>
      <DebouncedTextField
        label="Поиск по названию"
        isLoading={isLoading}
        variant="outlined"
        value={filters[FiltersEnum.textSearch]}
        onChange={(value) => {
          updateFilters({ [FiltersEnum.textSearch]: value });
        }}
        fullWidth
      />
    </Grid>
    <Grid item container>
      <DebouncedRange
        name="Площадь"
        isLoading={isLoading}
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
        isLoading={isLoading}
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
        isLoading={isLoading}
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
        isLoading={isLoading}
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
        isLoading={isLoading}
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
        isLoading={isLoading}
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
        isLoading={isLoading}
        label="Оплата онлайн"
        value={filters[FiltersEnum.hasOnlineBooking]}
        onChange={(value) =>
          updateFilters({ [FiltersEnum.hasOnlineBooking]: value })
        }
      />
    </Grid>
  </Grid>
);
