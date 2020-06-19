import React, { FunctionComponent } from 'react';
import { Grid } from '@components';
import { GridPaper } from './Filters.styles';
import { FiltersSuccess, FiltersSuccessProps } from './FiltersSuccess';

type Props = FiltersSuccessProps & { isConfigLoading: boolean };

export const Filters: FunctionComponent<Props> = ({
  filters,
  isConfigLoading,
  config,
  updateFilters,
  isMetroListLoading,
  metroList,
  configError,
  metroListError,
}) => {
  if (isConfigLoading || isMetroListLoading) {
    return (
      <Grid item md={3} lg={2} component={GridPaper} variant="outlined" square>
        <Grid container>loading</Grid>
      </Grid>
    );
  }
  return (
    <Grid item md={3} lg={2} component={GridPaper} variant="outlined" square>
      <FiltersSuccess
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
