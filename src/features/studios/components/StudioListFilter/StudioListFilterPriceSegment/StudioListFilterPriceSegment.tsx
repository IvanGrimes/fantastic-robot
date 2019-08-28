import React, { memo, useCallback, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { PropertyList } from '../../../../../components/PropertyList';
import { RootState } from '../../../../../model/types';
import { getAppliedFilters, getFiltersData } from '../../../model/selectors';
import * as a from '../../../model/actions';
import { getPriceSegment } from '../../../../../utils/getPriceSegment';
import { PriceSegment } from '../../../model/types';

export type StudioListFilterPriceSegmentProps = {
  isClearable?: boolean;
} & ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  list: getFiltersData(state).priceSegments,
  selectedIds: getAppliedFilters(state).priceSegments,
});

const dispatchProps = {
  handleChange: a.setFilters,
};

const _StudioListFilterPriceSegment = ({
  list,
  selectedIds,
  handleChange,
  isClearable = true,
}: StudioListFilterPriceSegmentProps) => {
  const normalizedPriceSegmentList = useMemo(
    () =>
      list.map(segment => ({
        id: segment.toString(),
        name: getPriceSegment(segment).join(''),
      })),
    [list]
  );
  const normalizedSelectedPriceSegment = useMemo(
    () => selectedIds.map(id => id.toString()),
    [selectedIds]
  );
  const onChange = useCallback(
    (segments: PriceSegment[]) => () =>
      handleChange({
        priceSegments: segments,
      }),
    [handleChange]
  );

  return (
    <PropertyList
      title="Ценовой сегмент"
      list={normalizedPriceSegmentList}
      selectedIds={normalizedSelectedPriceSegment}
      onChange={onChange}
      isClearable={isClearable}
    />
  );
};

export const StudioListFilterPriceSegment = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterPriceSegment, dequal));
