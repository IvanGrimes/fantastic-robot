import React, { memo, useCallback, useRef, useState } from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import {
  FilterList as FilterListIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import { animated, useSpring } from 'react-spring';
import { FilterPropertyList } from './FilterPropertyList';
import { Wrapper, FilterGrid, ColorCircle } from './StudioListFilter.styles';
import { ClearableInput } from '../ClearableInput';
import { PriceSegment } from "../../redux/studios/types";

type List = { id: string; name: string }[];

type IdList = string[];

type SelectHandler<T> = (id: T) => () => void;

type Props = {
  className: string;
  typeList: List;
  selectedTypesIds: IdList;
  handleSelectType: SelectHandler<string[]>;
  stationList: List;
  selectedStationIds: IdList;
  handleSelectStation: SelectHandler<string[]>;
  priceSegmentList: List;
  selectedPriceSegments: IdList;
  handleSelectPriceSegment: SelectHandler<PriceSegment[]>;
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
}: Props) => {
  const [isOpen, setOpen] = useState(false);
  const handleToggleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
  const filtersRef = useRef<HTMLDivElement>(null);
  const filtersMaxHeightHeight = filtersRef.current
    ? filtersRef.current.scrollHeight + filtersRef.current.clientHeight / 2
    : 0;
  const filtersAnimation = useSpring({
    maxHeight: isOpen ? filtersMaxHeightHeight : 0,
    opacity: isOpen ? 1 : 0,
    config: { mass: 1, tension: 280, friction: 55 },
  });

  return (
    <Wrapper>
      <Grid className={className} container spacing={4}>
        <Grid
          container
          item
          xs={12}
          alignItems="flex-end"
          justify="space-between"
        >
          <Grid item xs={11}>
            <ClearableInput
              label="Поиск по названию"
              onChange={handleSearchChange}
              value={searchValue}
            />
          </Grid>
          <Grid item>
            <IconButton href="" size="small" onClick={handleToggleOpen}>
              {isOpen ? <CloseIcon /> : <FilterListIcon />}
            </IconButton>
          </Grid>
        </Grid>
        <FilterGrid
          component={animated.div as any}
          container
          item
          spacing={4}
          alignItems="flex-start"
          style={filtersAnimation}
          ref={filtersRef}
        >
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
              searchable
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
        </FilterGrid>
      </Grid>
    </Wrapper>
  );
};

export const StudioListFilter = memo(_StudioListFilter);
