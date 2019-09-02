import React, { memo, useCallback, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { PropertyList } from '../../../../components/PropertyList';
import { RootState } from '../../../../model/types';
import { getPriceSegment } from '../../../../utils/getPriceSegment';
import { StudioListFilterPriceSegmentProps } from './index';
import { PriceSegment } from '../../../studioList/model/types';
import { setFilters } from '../../model/actions';
import { getAppliedFilters, getFiltersData } from '../../model/selectors';

type Props = StudioListFilterPriceSegmentProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  list: getFiltersData(state).priceSegments,
  selectedIds: getAppliedFilters(state).priceSegments,
});

const dispatchProps = {
  handleChange: setFilters,
};

const _StudioListFilterPriceSegment = ({
  className = '',
  list,
  selectedIds,
  handleChange,
  isClearable = true,
}: Props) => {
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
      className={className}
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
