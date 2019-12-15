import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import { usePrevious } from '@hooks/usePrevious';
import { RootState } from '@model/types';
import { withSEO } from '@HOC/withSEO';
import * as listMap from '../../features/list-map';
import { ContentGrid, StudioListGrid } from './List.styles';
import * as list from '../../features/list';
import * as filters from '../../features/filters';

const { StudioListMap } = listMap;
const { StudioList } = list;

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  studios: list.selectors.getStudios(state),
  hasFilters: filters.selectors.getHasFilters(state),
  isMapListEnabled: listMap.selectors.getIsEnabled(state),
});

const dispatchProps = {
  handleFetchStudios: list.actions.fetchStudiosAsync.request,
};

const _Index = ({
  hasFilters,
  studios,
  handleFetchStudios,
  isMapListEnabled,
}: Props) => {
  const { query, push } = useRouter();
  const prevHasFilters = usePrevious(hasFilters);
  const pageRef = useRef(query.number as string);
  const mapListEnabled = listMap.enabled ? isMapListEnabled : false;

  useEffect(() => {
    const pageNumber = parseInt(pageRef.current, 10);
    const isPageNumberNaN = Number.isNaN(pageNumber);

    if (pageNumber && isPageNumberNaN) {
      push('/404');
    }
    if (!hasFilters && !prevHasFilters && !studios.length) {
      handleFetchStudios({
        city: 'moscow',
        page: isPageNumberNaN ? 1 : pageNumber,
      });
    }
  }, [handleFetchStudios, hasFilters, prevHasFilters, push, studios.length]);

  return (
    <ContentGrid container>
      <StudioListGrid
        item
        xs={12}
        md={12}
        lg={6}
        isMapListEnabled={mapListEnabled}
      >
        <StudioList listItemVariant={mapListEnabled ? 'wide' : 'short'} />
      </StudioListGrid>
      <Grid item xs={12} lg={6}>
        <StudioListMap />
      </Grid>
    </ContentGrid>
  );
};

export const List = connect(
  mapStateToProps,
  dispatchProps
)(
  withSEO(({ query }) => [
    () =>
      list.actions.fetchStudiosAsync.request({
        city: 'moscow',
        page: parseInt(query.number as string, 10) || 1,
      }),
  ])(_Index)
);
