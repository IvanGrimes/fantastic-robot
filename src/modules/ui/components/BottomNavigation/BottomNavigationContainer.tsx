import React, { memo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { RootState } from '@model/types';
import { getIsBottomNavigationVisible } from '../../model/selectors';
import { setBottomNavigationVisibility } from '../../model/actions';
import { BottomNavigation } from './BottomNavigation';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isBottomNavigationVisible: getIsBottomNavigationVisible(state),
});

const dispatchProps = {
  handleSetBottomNavigationVisibility: setBottomNavigationVisibility,
};

const _BottomNavigationContainer = ({
  isBottomNavigationVisible,
  handleSetBottomNavigationVisibility,
}: Props) => {
  return (
    <BottomNavigation
      isBottomNavigationVisible={isBottomNavigationVisible}
      handleSetBottomNavigationVisibility={handleSetBottomNavigationVisibility}
    />
  );
};

export const BottomNavigationContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_BottomNavigationContainer, dequal));
