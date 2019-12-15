import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { Container } from '@components/Container';
import { StudioListFilter } from '@modules/studio/features/filters/components';
import { BarWrapper } from './HeaderBar.styles';
import { ListMapSwitch } from './ListMapSwitch';

const _HeaderBar = () => (
  <Grid container>
    <BarWrapper>
      <Container fluid>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <StudioListFilter />
          </Grid>
          <ListMapSwitch />
        </Grid>
      </Container>
    </BarWrapper>
  </Grid>
);

export const HeaderBar = memo(_HeaderBar);
