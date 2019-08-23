import React, { memo, useCallback, useMemo, useState } from 'react';
import dequal from 'dequal';
import { Button, Grid, Typography } from '@material-ui/core';
import { PropertyListProps } from './index';
import { getAbsoluteString } from '../../utils/getAbsoluteString';
import { ClearableInput } from '../ClearableInput';
import {
  WrapperGrid,
  ListGrid,
  ListScrollableGrid,
} from './PropertyList.styles';
import { PropertyListItem } from './PropertyListItem';
import { ChipList } from '../ChipList';

// TODO: add prop renderList and make generic interface for PropertyListItem and ChipList for polymorphism

const _PropertyList = ({
  title,
  list,
  onChange,
  selectedIds,
  renderName,
  isClearable = false,
  isSearchable = false,
  searchProps = {},
  variant = 'chip',
  ...props
}: PropertyListProps) => {
  const [search, setSearch] = useState('');
  const filteredList = useMemo(
    () =>
      list.filter(({ name }) =>
        getAbsoluteString(name).includes(getAbsoluteString(search))
      ),
    [list, search]
  );
  const handleToggle = useCallback((id: string) => onChange([id])(), [
    onChange,
  ]);

  return (
    <WrapperGrid container direction="column" {...props}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography variant="h6" component="span">
            {title}
          </Typography>
        </Grid>
        {isClearable ? (
          <Grid item>
            <Button
              onClick={onChange(selectedIds)}
              color="primary"
              size="small"
              variant="outlined"
            >
              Очистить
            </Button>
          </Grid>
        ) : null}
      </Grid>
      <Grid container>
        {isSearchable ? (
          <ClearableInput
            value={search}
            onChange={setSearch}
            {...searchProps}
          />
        ) : null}
        <ListGrid item xs={12}>
          <ListScrollableGrid container>
            {variant === 'chip' ? (
              <ChipList
                list={filteredList}
                selectedListId={selectedIds}
                handleToggle={handleToggle}
                renderName={renderName}
              />
            ) : null}
            {variant === 'checkbox'
              ? filteredList.map(({ id, name, ...rest }) => (
                  <PropertyListItem
                    key={id}
                    id={id}
                    name={name}
                    onChange={onChange}
                    isActive={selectedIds.includes(id)}
                    renderName={renderName}
                    {...rest}
                  />
                ))
              : null}
          </ListScrollableGrid>
        </ListGrid>
      </Grid>
    </WrapperGrid>
  );
};

export const PropertyList = memo(_PropertyList, dequal);
