import React, { memo, useCallback, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { PropertyList } from '../../../../components/PropertyList';
import { RootState } from '../../../../model/types';
import { getPriceType } from '../../../../utils/getPriceType';
import { StudioListFilterPriceSegmentProps } from './index';
import { setFilters } from '../../model/actions';
import { getFilters } from '../../model/selectors';
import { getConfig } from '../../../studioData/model/selectors';
import { PriceType } from '../../../studioData/model/types';

type Props = StudioListFilterPriceSegmentProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  list: getConfig(state).price,
  selectedIds: getFilters(state).priceTypes,
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
        value: getPriceType(segment).join(''),
      })),
    [list]
  );
  const normalizedSelectedPriceSegment = useMemo(
    () => selectedIds.map(id => id.toString()),
    [selectedIds]
  );
  const onChange = useCallback(
    (segments: PriceType[]) => () =>
      handleChange({
        priceTypes: segments,
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

export const PriceTypeFilter = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterPriceSegment, dequal));
