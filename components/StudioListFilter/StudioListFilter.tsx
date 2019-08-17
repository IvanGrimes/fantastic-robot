import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FilterPropertyList } from './FilterPropertyList';
import { ColorCircle } from './StudioListFilter.styles';
import { ClearableInput } from '../ClearableInput';

// TODO: Make fetchStudioAsync.request cancellable, before request send cancel or before set_filter action

type List = { id: string; name: string }[];

type IdList = string[];

type SelectHandler<T> = (id?: T) => () => void;

type Props = {
  className: string;
  typeList: List;
  selectedTypesIds: IdList;
  handleSelectType: SelectHandler<string>;
  stationList: List;
  selectedStationIds: IdList;
  handleSelectStation: SelectHandler<string>;
  priceSegmentList: List;
  selectedPriceSegments: IdList;
  handleSelectPriceSegment: SelectHandler<string>;
  handleSearchChange: (value: string) => void;
  searchValue: string;
};

const _StudioListFilter = ({
  className,
  typeList,
  selectedTypesIds,
  handleSelectType,
  stationList,
  selectedStationIds,
  handleSelectStation,
  priceSegmentList,
  selectedPriceSegments,
  handleSelectPriceSegment,
  handleSearchChange,
  searchValue,
}: Props) => (
  <Grid className={className} container spacing={4}>
    <Grid item xs={12}>
      <ClearableInput
        label="Поиск по названию"
        onChange={handleSearchChange}
        value={searchValue}
      />
    </Grid>
    <Grid item xs={6}>
      <FilterPropertyList
        title="Типы студий"
        list={typeList}
        selectedIds={selectedTypesIds}
        onChange={handleSelectType}
      />
    </Grid>
    <Grid item xs={6}>
      <FilterPropertyList
        title="Станции метро"
        list={stationList}
        selectedIds={selectedStationIds}
        onChange={handleSelectStation}
        renderName={({ color, name }) => (
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <ColorCircle color={color} />
            </Grid>
            <Grid item>
              <Typography>{name}</Typography>
            </Grid>
          </Grid>
        )}
      />
    </Grid>
    <Grid item xs={6}>
      <FilterPropertyList
        title="Ценовой сегмент"
        list={priceSegmentList}
        selectedIds={selectedPriceSegments}
        onChange={handleSelectPriceSegment}
      />
    </Grid>
  </Grid>
);

export const StudioListFilter = memo(_StudioListFilter);
