import React, { memo, useMemo, useState } from "react";
import dequal from 'dequal';
import { Button, Grid, Typography } from "@material-ui/core";
import { FilterPropertyListProps } from './index';
import { FilterPropertyListItem } from './FilterPropertyListItem/FilterPropertyListItem';
import { getAbsoluteString } from '../../../lib/getAbsoluteString';
import { ClearableInput } from '../../ClearableInput';
import { ListGrid, ListScrollableGrid } from './FilterPropertyList.styles';

const _FilterPropertyList = ({
  title,
  list,
  onChange,
  selectedIds,
  renderName,
  searchable = false,
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
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={8}>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        </Grid>
        <Grid item>
          <Button href="" onClick={onChange(selectedIds)} color="primary" size="small">
            Очистить
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        {searchable ? (
          <ClearableInput label="Поиск" value={search} onChange={setSearch} />
        ) : null}
        <ListGrid item xs={12}>
          <ListScrollableGrid container>
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
          </ListScrollableGrid>
        </ListGrid>
      </Grid>
    </Grid>
  );
};

export const FilterPropertyList = memo(_FilterPropertyList, dequal);
