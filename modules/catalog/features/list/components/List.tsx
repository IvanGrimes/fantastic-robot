import React, { FunctionComponent } from 'react';
import { renderService } from '@model';
import { Grid } from '@components';
import { ListSuccess } from './ListSuccess';
import { ListFail } from './ListFail';
import { ListService } from './types';
import { ListInit } from './ListInit';
import { GridList } from './List.styles';

export const List: FunctionComponent<{ service: ListService }> = ({
  service,
}) => (
  <GridList item md={9} lg={10}>
    <Grid container spacing={4} component="ul">
      {renderService(
        service,
        {},
        {
          Init: ListInit,
          Loading: ListSuccess,
          Success: ListSuccess,
          Fail: ListFail,
        }
      )}
    </Grid>
  </GridList>
);
