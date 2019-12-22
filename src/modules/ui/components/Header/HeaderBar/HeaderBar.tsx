import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { Container } from '../../Container';
import { ListFilter } from '@modules/studio/features/filters/components';
import { BarWrapper } from './HeaderBar.styles';
import { ListMapSwitch } from './ListMapSwitch';

const _HeaderBar = () => (
  <Grid container>
    <BarWrapper>
      <Container variant="fluid">
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <ListFilter />
          </Grid>
          <ListMapSwitch />
        </Grid>
      </Container>
    </BarWrapper>
  </Grid>
);

export const HeaderBar = memo(_HeaderBar);
