import React, { FunctionComponent, Fragment } from 'react';
import { Grid } from '@components';
import { RequestError } from '@shared';
import { ListSuccess } from './ListSuccess';
import { ListInit } from './ListInit';
import { GridList, InfiniteScroll } from './List.styles';
import { StudioList } from '../model';
import { ListFail } from './ListFail';

const Wrapper: FunctionComponent = ({ children }) => (
  <GridList item md={9} lg={10}>
    {children}
  </GridList>
);

const ListWrapper: FunctionComponent = ({ children }) => (
  <Grid container spacing={4} component="ul">
    {children}
  </Grid>
);

export const List: FunctionComponent<{
  isLoading: boolean;
  isNextLoading: boolean;
  list: StudioList;
  error: RequestError;
  fetchNext: (args: { page: number }) => void;
  hasNext: boolean;
}> = ({ isLoading, list, error, fetchNext, isNextLoading, hasNext }) => {
  if (error.message) {
    return (
      <Wrapper>
        <ListFail error={error} />
      </Wrapper>
    );
  }

  if (isLoading) {
    return (
      <Wrapper>
        <ListWrapper>
          <ListInit />
        </ListWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <InfiniteScroll
        fetchNext={(page) => fetchNext({ page })}
        hasNext={hasNext}
        loader={isNextLoading ? <p key={0}>loading</p> : <Fragment key={0} />}
      >
        <ListWrapper>
          <ListSuccess list={list} />
        </ListWrapper>
      </InfiniteScroll>
    </Wrapper>
  );
};
