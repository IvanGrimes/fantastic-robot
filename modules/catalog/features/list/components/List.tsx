import React, { FunctionComponent } from 'react';
import { Grid } from '@components';
import { ListSuccess } from './ListSuccess';
import { ListInit } from './ListInit';
import { GridList } from './List.styles';
import { StudioList } from '../model';

const Wrapper: FunctionComponent = ({ children }) => (
  <GridList item md={9} lg={10}>
    <Grid container spacing={4} component="ul">
      {children}
    </Grid>
  </GridList>
);

export const List: FunctionComponent<{
  isLoading: boolean;
  list: StudioList;
}> = ({ isLoading, list }) => {
  if (isLoading) {
    return (
      <Wrapper>
        <ListInit />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ListSuccess list={list} />
    </Wrapper>
  );
};
