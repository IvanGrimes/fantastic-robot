import React, { memo, useMemo, useState } from 'react';
import dequal from 'dequal';
import { Grid } from '@material-ui/core';
import { FilterPropertyListProps } from './index';
import { FilterPropertyListItem } from './FilterPropertyListItem/FilterPropertyListItem';
import { getAbsoluteString } from '../../../lib/getAbsoluteString';
import { FilterPropertyListSearch } from './FilterPropertyListSearch';

const _FilterPropertyList = ({
  list,
  onChange,
  selectedIds,
}: FilterPropertyListProps) => {
  const [search, setSearch] = useState('');
  const filteredList = useMemo(
    () =>
      list.filter(({ name }) =>
        getAbsoluteString(name).includes(getAbsoluteString(search))
      ),
    [list, search]
  );

  return (
    <Grid container>
      <FilterPropertyListSearch value={search} onChange={setSearch} />
      <Grid item xs={12}>
        {filteredList.map(({ id, name }) => (
          <FilterPropertyListItem
            key={id}
            id={id}
            name={name}
            onChange={onChange}
            isActive={selectedIds.includes(id)}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export const FilterPropertyList = memo(_FilterPropertyList, dequal);
