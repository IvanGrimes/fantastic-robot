import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { RootState } from '../../model/types';
import { ContentGrid, StudioListGrid } from './index.styles';
import { StudioList } from '../../features/studioList/components';
import { fetchStudiosAsync } from '../../features/studioList/model/actions';
import { getIsEnabled } from '../../features/studioMapList/model/selectors';
import { getStudios } from '../../features/studioList/model/selectors';
import { getHasFilters } from '../../features/studioFilters/model/selectors';
import { usePrevious } from '../../hooks/usePrevious';
import { SSRError } from '../../lib/SSRError';

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

const getInitialProps = async (ctx: { query: { number: string } }) => {
  const { query } = ctx;

  if (!query.number) {
    return {};
  }

  try {
    const number = parseInt(query.number, 10);

    if (Number.isNaN(number)) {
      throw new Error(
        `Parameter number should be a type of "number", but got: ${typeof number}`
      );
    }
  } catch (e) {
    throw new SSRError({ statusCode: 404 });
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
  const pageRef = useRef(parseInt(query.page as string, 10));

  useEffect(() => {
    const pageNumber = pageRef.current;
    const page = Number.isNaN(pageNumber) ? 1 : pageNumber;

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
