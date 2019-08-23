import React, { Fragment, memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { StudioListFilterProps } from './index';
import { StudioListFilterDesktop } from './StudioListFilterDesktop';
import { StudioListFilterMobile } from './StudioListFilterMobile';
import { Hidden } from '../../../components/Hidden';
import { clearFilters, toggleFiltersVisibility } from '../actions';
import { RootState } from '../../../model/types';
import { getFilterVisibility } from '../selectors';

// TODO: Create and connect clearFilters action

type Props = StudioListFilterProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isVisible: getFilterVisibility(state),
});

const dispatchProps = {
  handleToggleFilterVisibility: toggleFiltersVisibility,
  handleClearFilters: clearFilters,
};

const _StudioListFilterContainer = ({
  className = '',
  isVisible,
  handleToggleFilterVisibility,
  handleClearFilters,
}: Props) => {
  const handleToggleVisibility = useCallback(
    () => handleToggleFilterVisibility(!isVisible),
    [handleToggleFilterVisibility, isVisible]
  );
  const viewProps = {
    className,
    isVisible,
    handleToggleVisibility,
    handleClearFilters,
  };

  return (
    <Fragment>
      <Hidden smDown>
        <StudioListFilterDesktop {...viewProps} />
      </Hidden>
      <Hidden mdUp>
        <StudioListFilterMobile {...viewProps} />
      </Hidden>
    </Fragment>
  );
};

export const StudioListFilterContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListFilterContainer, dequal));
