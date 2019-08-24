import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../model/types';
import { getIsMapVisible } from '../../model/selectors';
import { toggleMap } from '../../model/actions';
import { Header } from './Header';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isMapVisible: getIsMapVisible(state),
});

const dispatchProps = {
  handleToggleMap: toggleMap,
};

const _HeaderContainer = ({ isMapVisible, handleToggleMap }: Props) => {
  return (
    <Header isMapVisible={isMapVisible} handleToggleMap={handleToggleMap} />
  );
};

export const HeaderContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_HeaderContainer));
