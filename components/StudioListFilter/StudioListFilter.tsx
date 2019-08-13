import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { FilterPropertyList } from './FilterPropertyList';

type Props = {
  className: string;
  typeList: { id: string; name: string }[];
  selectedTypesIds: string[];
  handleSelectType: (id?: string) => () => void;
};

const _StudioListFilter = ({
  className,
  typeList,
  selectedTypesIds,
  handleSelectType,
}: Props) => (
  <Grid container className={className}>
    <Grid item xs={12}>
      <FilterPropertyList
        list={typeList}
        selectedIds={selectedTypesIds}
        onChange={handleSelectType}
      />
    </Grid>
  </Grid>
);

export const StudioListFilter = memo(_StudioListFilter);
