import React, { memo, useMemo, useState } from 'react';
import dequal from 'dequal';
import { Grid, Typography } from "@material-ui/core";
import { FilterPropertyListProps } from './index';
import { FilterPropertyListItem } from './FilterPropertyListItem/FilterPropertyListItem';
import { getAbsoluteString } from '../../../lib/getAbsoluteString';
import { FilterPropertyListSearch } from './FilterPropertyListSearch';

const _FilterPropertyList = ({
  title,
  list,
  onChange,
  selectedIds,
  renderName
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
      <Grid item xs={12}>
        <Typography variant="h6" component="span">{title}</Typography>
      </Grid>
      <Grid container>
      <FilterPropertyListSearch value={search} onChange={setSearch} />
      <Grid item xs={12}>
        {filteredList.map(({ id, name, ...rest }) => (
          <FilterPropertyListItem
            key={id}
            id={id}
            name={name}
            onChange={onChange}
            isActive={selectedIds.includes(id)}
            renderName={renderName}
            {...rest}
          />
        ))}
      </Grid>
      </Grid>
    </Grid>
  );
};

export const FilterPropertyList = memo(_FilterPropertyList, dequal);
