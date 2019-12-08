import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { RootState } from '../../model/types';
import { ContentGrid, StudioListGrid } from './index.styles';
import { StudioList } from '../../features/studioList/components';
import { fetchStudiosAsync } from '../../features/studioList/model/actions';
import { getIsEnabled } from '../../features/studioListMap/model/selectors';
import { getStudios } from '../../features/studioList/model/selectors';
import { getHasFilters } from '../../features/studioFilters/model/selectors';
import { usePrevious } from '../../hooks/usePrevious';
import { featuresConfig } from '../../features/config';
import { withSEO } from '../../lib/withSEO';

const StudioListMap = dynamic<{}>(() =>
  import('../../features/studioListMap/components').then(
    module => module.StudioListMap
  )
);

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  studios: getStudios(state),
  hasFilters: getHasFilters(state),
  isMapListEnabled: getIsEnabled(state),
});

const dispatchProps = {
  handleFetchStudios: fetchStudiosAsync.request,
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
  const mapListEnabled = featuresConfig.studioListMap
    ? isMapListEnabled
    : false;

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

export const Index = withSEO(({ query }) => [
  () =>
    fetchStudiosAsync.request({
      city: 'moscow',
      page: parseInt(query.number as string, 10) || 1,
    }),
])(
  connect(
    mapStateToProps,
    dispatchProps
  )(_Index)
);
