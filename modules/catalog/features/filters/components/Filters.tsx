import React, { FunctionComponent } from 'react';
import { Grid } from '@components';
import { GridPaper } from './Filters.styles';
import { FiltersSuccess, FiltersSuccessProps } from './FiltersSuccess';

type Props = FiltersSuccessProps & { isConfigLoading: boolean };

export const Filters: FunctionComponent<Props> = ({
  filters,
  config,
  updateFilters,
  isMetroListLoading,
  metroList,
  configError,
  metroListError,
  isConfigLoading,
}) => {
  return (
    <Grid item md={3} lg={2} component={GridPaper} variant="outlined" square>
      <FiltersSuccess
        isLoading={isMetroListLoading || isConfigLoading}
        isMetroListLoading={isMetroListLoading}
        metroList={metroList}
        filters={filters}
        config={config}
        updateFilters={updateFilters}
        configError={configError}
        metroListError={metroListError}
      />
    </Grid>
  );
};
