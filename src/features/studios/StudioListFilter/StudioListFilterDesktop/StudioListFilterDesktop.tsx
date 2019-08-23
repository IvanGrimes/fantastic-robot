import React, { memo, useRef } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import {
  FilterList as FilterListIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import { animated, useSpring } from 'react-spring';
import {
  Wrapper,
  FilterGrid,
  FilterItemGrid,
} from './StudioListFilterDesktop.styles';
import { StudioListFilterSearch } from '../StudioListFilterSearch';
import { StudioListFilterType } from '../StudioListFilterType';
import { StudioListFilterStation } from '../StudioListFilterStation';
import { StudioListFilterPriceSegment } from '../StudioListFilterPriceSegment';
import { StudioListFilterViewProps } from '../index';

const _StudioListFilterDesktop = ({
  className = '',
  isVisible,
  handleToggleVisibility,
}: StudioListFilterViewProps) => {
  const filtersRef = useRef<HTMLDivElement>(null);
  const filtersMaxHeight = filtersRef.current
    ? filtersRef.current.scrollHeight + filtersRef.current.clientHeight / 2
    : 0;
  const filtersAnimation = useSpring({
    maxHeight: isVisible ? filtersMaxHeight : 0,
    opacity: isVisible ? 1 : 0,
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
              <StudioListFilterSearch />
            </Grid>
            <Grid item>
              <IconButton href="" size="small" onClick={handleToggleVisibility}>
                {isVisible ? <CloseIcon /> : <FilterListIcon />}
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
            <StudioListFilterType />
          </FilterItemGrid>
          <FilterItemGrid container item sm={6} md={4}>
            <StudioListFilterPriceSegment />
          </FilterItemGrid>
          <FilterItemGrid container item sm={6} md={4}>
            <StudioListFilterStation />
          </FilterItemGrid>
        </FilterGrid>
      </Grid>
    </Wrapper>
  );
};

export const StudioListFilterDesktop = memo(_StudioListFilterDesktop);
