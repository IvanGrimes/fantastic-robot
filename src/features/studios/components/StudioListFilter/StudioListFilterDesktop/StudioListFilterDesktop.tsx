import React, { Fragment, memo, useMemo } from 'react';
import { Button, Grid, Portal } from '@material-ui/core';
import { useSpring } from 'react-spring';
import { useStudioListFilterPopover } from '../../../hooks/useStudioListFilterPopover';
import { StudioListFilterStation } from '../StudioListFilterStation';
import { StudioListFilterType } from '../StudioListFilterType';
import { StudioListFilterPriceSegment } from '../StudioListFilterPriceSegment';
import { Overlay } from './StudioListFilterDesktop.styles';

const _StudioListFilterDesktop = () => {
  const [
    isStationFilterVisible,
    handleToggleStation,
    stationFilter,
  ] = useStudioListFilterPopover(<StudioListFilterStation />);
  const [
    isTypeFilterVisible,
    handleToggleType,
    typeFilter,
  ] = useStudioListFilterPopover(<StudioListFilterType />);
  const [
    isPriceSegmentFilterVisible,
    handleTogglePriceSegment,
    priceSegmentFilter,
  ] = useStudioListFilterPopover(<StudioListFilterPriceSegment />);
  const layout = useMemo(
    () =>
      typeof document !== 'undefined'
        ? document.querySelector('#layout')
        : null,
    []
  );
  const isAnyFilterVisible =
    isStationFilterVisible ||
    isTypeFilterVisible ||
    isPriceSegmentFilterVisible;
  const overlaySpring = useSpring({ opacity: isAnyFilterVisible ? 1 : 0 });

  return (
    <Fragment>
      <Portal container={layout}>
        <Overlay style={overlaySpring} isVisible={isAnyFilterVisible} />
      </Portal>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button variant="outlined" onClick={handleToggleStation}>
            Станции метро
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleToggleType}>
            Тип студии
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleTogglePriceSegment}>
            Цена
          </Button>
        </Grid>
      </Grid>
      {stationFilter}
      {typeFilter}
      {priceSegmentFilter}
    </Fragment>
  );
};

export const StudioListFilterDesktop = memo(_StudioListFilterDesktop);
