import React, { memo, useCallback, useEffect, useState } from 'react';
import dequal from 'dequal';
import { Button, Grid, Typography } from '@material-ui/core';
import debounce from 'lodash/debounce';
import { getAbsoluteString } from '@utils/getAbsoluteString';
import { PropertyListProps } from './index';
import { ClearableInput } from '../ClearableInput';
import { WrapperGrid, SearchGrid, VirtualList } from './PropertyList.styles';
import { PropertyListItem } from './PropertyListItem';
import { ChipList } from '../ChipList';

// TODO: add prop renderList and make generic interface for PropertyListItem and ChipList for polymorphism

const _PropertyList = ({
  className = '',
  title,
  list,
  onChange,
  selectedIds,
  renderValue,
  isClearable = false,
  isSearchable = false,
  searchProps = {},
  variant = 'chip',
  ...props
}: PropertyListProps) => {
  const [filteredList, setFilteredList] = useState(list);
  const [search, setSearch] = useState('');
  const handleToggle = useCallback((id: string) => onChange([id])(), [
    onChange,
  ]);

  useEffect(() => {
    const filterList = debounce(
      () =>
        setFilteredList(
          list.filter(
            item =>
              item &&
              getAbsoluteString(item.value).includes(getAbsoluteString(search))
          )
        ),
      100
    );

    filterList();
  }, [list, search]);

  return (
    <WrapperGrid
      className={className}
      container
      direction="column"
      spacing={2}
      {...props}
    >
      <Grid
        container
        item
        alignItems="center"
        justify="space-between"
        spacing={2}
      >
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
      <Grid container item>
        {isSearchable ? (
          <SearchGrid item xs={12}>
            <ClearableInput
              value={search}
              onChange={setSearch}
              {...searchProps}
            />
          </SearchGrid>
        ) : null}
        <Grid container item>
          {variant === 'chip' && filteredList.length ? (
            <ChipList
              list={filteredList}
              selectedListId={selectedIds}
              handleToggle={handleToggle}
              renderValue={renderValue}
            />
          ) : null}
          {variant === 'checkbox' ? (
            <VirtualList
              itemSize={40}
              height={400}
              itemCount={filteredList.length}
              width={600}
              itemData={{
                renderValue,
                list: filteredList,
                selectedIds,
                onChange,
              }}
            >
              {PropertyListItem}
            </VirtualList>
          ) : null}
        </Grid>
      </Grid>
    </WrapperGrid>
  );
};

export const PropertyList = memo(_PropertyList, dequal);
