import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';
import Router, { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { RootState } from '../../model/types';
import { ContentGrid, StudioListGrid } from './index.styles';
import { StudioList } from '../../features/studioList/components';
import { fetchStudiosAsync } from '../../features/studioList/model/actions';
import { getIsEnabled } from '../../features/studioMapList/model/selectors';
import { getStudios } from '../../features/studioList/model/selectors';
import { getHasFilters } from '../../features/studioFilters/model/selectors';
import { usePrevious } from '../../hooks/usePrevious';

const StudioListMap = dynamic<{}>(() =>
  import('../../features/studioMapList/components').then(
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

const getInitialProps = async (ctx: NextPageContext) => {
  const { query, res } = ctx;
  const page = query.number as string;

  if (page && Number.isNaN(parseInt(page as string, 10))) {
    if (res) {
      res.writeHead(302, {
        Location: '/404',
      });

      res.end();
    } else {
      await Router.push('/404');
    }
  }
  return {};
};

const _Index = ({
  hasFilters,
  studios,
  handleFetchStudios,
  isMapListEnabled,
}: Props) => {
  const { query } = useRouter();
  const prevHasFilters = usePrevious(hasFilters);
  const pageRef = useRef(
    query.number ? parseInt(query.number as string, 10) : 1
  );

  useEffect(() => {
    const page = pageRef.current;

    if (!hasFilters && !prevHasFilters && !studios.length) {
      handleFetchStudios({ city: 'moscow', page });
    }
  }, [handleFetchStudios, hasFilters, prevHasFilters, studios.length]);

  return (
    <ContentGrid container>
      <StudioListGrid
        item
        xs={12}
        md={12}
        lg={6}
        isMapListEnabled={isMapListEnabled}
      >
        <StudioList listItemVariant={isMapListEnabled ? 'wide' : 'short'} />
      </StudioListGrid>
      <Grid item xs={12} lg={6}>
        <StudioListMap />
      </Grid>
    </ContentGrid>
  );
};

_Index.getInitialProps = getInitialProps;

export const Index = connect(
  mapStateToProps,
  dispatchProps
)(_Index);
