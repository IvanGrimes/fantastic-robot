import React, { memo, useCallback, useRef, useState } from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import {
  FilterList as FilterListIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import { animated, useSpring } from 'react-spring';
import { PropertyList } from '../../../components/PropertyList';
import {
  Wrapper,
  FilterGrid,
  FilterItemGrid,
  ColorCircle,
} from './StudioListFilter.styles';
import { ClearableInput } from '../../../components/ClearableInput';
import { PriceSegment } from '../types';

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
  const filtersMaxHeight = filtersRef.current
    ? filtersRef.current.scrollHeight + filtersRef.current.clientHeight / 2
    : 0;
  const filtersAnimation = useSpring({
    maxHeight: isOpen ? filtersMaxHeight : 0,
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
          <Grid container justify="space-between" alignItems="flex-end">
            <Grid item xs={10} sm={11}>
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
          <FilterItemGrid container item sm={6} md={4}>
            <PropertyList
              title="Типы студий"
              list={typeList}
              selectedIds={selectedTypesIds}
              onChange={handleSelectType}
            />
          </FilterItemGrid>
          <FilterItemGrid container item sm={6} md={4}>
            <PropertyList
              title="Ценовой сегмент"
              list={priceSegmentList}
              selectedIds={selectedPriceSegments}
              onChange={handleSelectPriceSegment}
            />
          </FilterItemGrid>
          <FilterItemGrid container item sm={6} md={4}>
            <PropertyList
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
              searchProps={{
                placeholder: 'Поиск',
              }}
            />
          </FilterItemGrid>
        </FilterGrid>
      </Grid>
    </Wrapper>
  );
};

export const StudioListFilter = memo(_StudioListFilter);
