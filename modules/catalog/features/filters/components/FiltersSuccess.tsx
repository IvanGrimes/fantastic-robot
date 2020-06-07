import React from 'react';
import { SuccessComponent, ConfigServiceProps, FiltersEnum } from '@model';
import { Grid } from '@components';
import { Range } from './Range';
import { FiltersProps } from './types';
import { DebouncedSwitch } from './DebouncedSwitch';
import { DebouncedTextField } from './DebouncedTextField';
import { MetroList } from './MetroList';

const squareMeter = <>&#13217;</>;
const ruble = <>&#8381;</>;

export const FiltersSuccess: SuccessComponent<
  ConfigServiceProps,
  FiltersProps
> = ({ filters, updateFilters }) => (
  <Grid container spacing={2}>
    <Grid item container>
      <DebouncedTextField
        label="Поиск по названию"
        variant="outlined"
        value={filters.values[FiltersEnum.textSearch]}
        onChange={(value) => {
          updateFilters({ [FiltersEnum.textSearch]: value });
        }}
        fullWidth
      />
    </Grid>
    <Grid item container>
      <Range
        name="Площадь"
        from={filters.values[FiltersEnum.area].from}
        changeFrom={(value) =>
          updateFilters({ [FiltersEnum.area]: { from: value } })
        }
        fromLabel={<>от {squareMeter}</>}
        to={filters.values[FiltersEnum.area].to}
        changeTo={(value) =>
          updateFilters({ [FiltersEnum.area]: { to: value } })
        }
        toLabel={<>до {squareMeter}</>}
      />
    </Grid>
    <Grid item container>
      <Range
        name="Высота потолков"
        from={filters.values[FiltersEnum.height].from}
        changeFrom={(value) =>
          updateFilters({ [FiltersEnum.height]: { from: value } })
        }
        fromLabel={<>от см</>}
        to={filters.values[FiltersEnum.height].to}
        changeTo={(value) =>
          updateFilters({ [FiltersEnum.height]: { to: value } })
        }
        toLabel={<>до см</>}
      />
    </Grid>
    <Grid item container>
      <Range
        name="Цена"
        from={filters.values[FiltersEnum.price].from}
        changeFrom={(value) =>
          updateFilters({ [FiltersEnum.price]: { from: value } })
        }
        fromLabel={<>от {ruble}</>}
        to={filters.values[FiltersEnum.price].to}
        changeTo={(value) =>
          updateFilters({ [FiltersEnum.price]: { to: value } })
        }
        toLabel={<>до {ruble}</>}
      />
    </Grid>
    <Grid item container>
      <MetroList
        values={filters.values[FiltersEnum.metro]}
        onChange={(value) =>
          updateFilters({
            [FiltersEnum.metro]: {
              [value]: !filters.values[FiltersEnum.metro][value],
            },
          })
        }
      />
    </Grid>
    <Grid item container>
      <DebouncedSwitch
        label="Оплата онлайн"
        value={filters.values[FiltersEnum.hasOnlineBooking]}
        onChange={(value) =>
          updateFilters({ [FiltersEnum.hasOnlineBooking]: value })
        }
      />
    </Grid>
  </Grid>
);
