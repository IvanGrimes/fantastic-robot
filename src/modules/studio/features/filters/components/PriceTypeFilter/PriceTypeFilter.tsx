import React, { memo, useCallback, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import * as ui from '@modules/ui/components';
import { RootState } from '@model/types';
import { getPriceType } from '@utils/getPriceType';
import { StudioListFilterPriceSegmentProps } from './index';
import { setFilters } from '../../model/actions';
import { getFilters } from '../../model/selectors';
import * as data from '../../../data';

type Props = StudioListFilterPriceSegmentProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const { PropertyList } = ui

const mapStateToProps = (state: RootState) => ({
  list: data.selectors.getConfig(state).price,
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
        value: getPriceType(segment),
      })),
    [list]
  );
  const normalizedSelectedPriceSegment = useMemo(
    () => selectedIds.map(id => id.toString()),
    [selectedIds]
  );
  const onChange = useCallback(
    (segments: data.PriceType[]) => () =>
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
