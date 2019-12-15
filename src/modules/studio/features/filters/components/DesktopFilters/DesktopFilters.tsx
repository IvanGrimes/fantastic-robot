import React, { Fragment, memo, useMemo } from 'react';
import { Button, Grid, Portal } from '@material-ui/core';
import { useStudioListFilterPopover } from '../../hooks/useStudioListFilterPopover';
import {
  Overlay,
  StudioListFilterStation,
  StudioListFilterInterior,
  StudioListFilterPriceSegment,
} from './DesktopFilters.styles';

type Props = { isLoading: boolean };

const _StudioListFilterDesktop = ({ isLoading }: Props) => {
  const [
    isStationFilterVisible,
    handleToggleStation,
    stationFilter,
  ] = useStudioListFilterPopover(<StudioListFilterStation />);
  const [
    isTypeFilterVisible,
    handleToggleType,
    typeFilter,
  ] = useStudioListFilterPopover(<StudioListFilterInterior />);
  const [
    isPriceSegmentFilterVisible,
    handleTogglePriceSegment,
    priceTypeFilter,
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

  return (
    <Fragment>
      <Portal container={layout}>
        <Overlay isVisible={isAnyFilterVisible} />
      </Portal>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button
            variant="outlined"
            onClick={handleToggleStation}
            disabled={isLoading}
          >
            Станции метро
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={handleToggleType}
            disabled={isLoading}
          >
            Тип студии
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={handleTogglePriceSegment}
            disabled={isLoading}
          >
            Цена
          </Button>
        </Grid>
      </Grid>
      {stationFilter}
      {typeFilter}
      {priceTypeFilter}
    </Fragment>
  );
};

export const DesktopFilters = memo(_StudioListFilterDesktop);
