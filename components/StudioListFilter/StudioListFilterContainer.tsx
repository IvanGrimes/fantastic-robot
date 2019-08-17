import React, { memo, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import * as a from '../../redux/studios/actions';
import { StudioListFilter } from './StudioListFilter';
import { RootState } from '../../redux/types';
import {
  getAppliedFilters,
  getFiltersData,
} from '../../redux/studios/selectors';
import { PriceSegment } from '../../redux/studios/types';
import { getPriceSegment } from '../../lib/getPriceSegment';

export type StudioListFilterContainerProps = ReturnType<
  typeof mapStateToProps
> &
  typeof dispatchProps & {
    className?: string;
  };

const mapStateToProps = (state: RootState) => ({
  filters: getFiltersData(state),
  appliedFilters: getAppliedFilters(state),
});

const dispatchProps = {
  setFilters: a.setFilters,
};

const _StudioListFilterContainer = ({
  className = '',
  setFilters,
  filters,
  appliedFilters,
}: StudioListFilterContainerProps) => {
  const handleSelectType = useCallback(
    (id?: string) => () =>
      setFilters({ typeIds: typeof id !== 'undefined' ? [id] : id }),
    [setFilters]
  );
  const handleSelectStation = useCallback(
    (id?: string) => () =>
      setFilters({ stationIds: typeof id !== 'undefined' ? [id] : id }),
    [setFilters]
  );
  const handleSelectPriceSegment = useCallback(
    (segment?: string) => () => {
      const numberSegment =
        typeof segment === 'string' ? parseInt(segment, 10) : segment;

      return setFilters({
        priceSegment:
          typeof numberSegment !== 'undefined' && !Number.isNaN(numberSegment)
            ? ([numberSegment] as PriceSegment[])
            : undefined,
      });
    },
    [setFilters]
  );
  const handleSearchChange = useCallback(
    (value: string) => setFilters({ name: value }),
    [setFilters]
  );
  const normalizedPriceSegmentList = useMemo(
    () =>
      filters.priceSegments.map(segment => ({
        id: segment.toString(),
        name: getPriceSegment(segment).join(''),
      })),
    [filters.priceSegments]
  );
  const normalizedSelectedPriceSegment = useMemo(
    () => appliedFilters.priceSegments.map(id => id.toString()),
    [appliedFilters.priceSegments]
  );

  return (
    <StudioListFilter
      className={className}
      typeList={filters.types}
      selectedTypesIds={appliedFilters.typeIds}
      handleSelectType={handleSelectType}
      stationList={filters.stations}
      selectedStationIds={appliedFilters.stationIds}
      handleSelectStation={handleSelectStation}
      priceSegmentList={normalizedPriceSegmentList}
      selectedPriceSegments={normalizedSelectedPriceSegment}
      handleSelectPriceSegment={handleSelectPriceSegment}
      handleSearchChange={handleSearchChange}
      searchValue={appliedFilters.name}
    />
  );
};

export const StudioListFilterContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterContainer));
