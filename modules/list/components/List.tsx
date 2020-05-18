import React, { FunctionComponent } from 'react';
import { renderService } from '@model';
import { Grid } from '@components';
import { ListLoading } from './ListLoading';
import { ListSuccess } from './ListSuccess';
import { ListFail } from './ListFail';
import { ListService } from './types';

export const List: FunctionComponent<{ service: ListService }> = ({
  service,
}) => (
  <Grid item xs={9}>
    {renderService(
      service,
      {},
      {
        Loading: ListLoading,
        Success: ListSuccess,
        Fail: ListFail,
      }
    )}
  </Grid>
);
