import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import { Container } from '@modules/ui';
import { Wrapper, AppBar, Toolbar } from './BaseHeader.styles';
import { useInjections } from '../Layout';

export type BaseHeaderProps = {
  isVisible?: boolean;
  showBar?: boolean;
  children: ReactNode | ReactNode[];
};

export const BaseHeader = ({
  isVisible = false,
  showBar = false,
  children,
}: BaseHeaderProps) => {
  const { HeaderBar } = useInjections();

  return (
    <Wrapper isVisible={isVisible}>
      <Grid container>
        <Grid container>
          <AppBar color="primary" position="static">
            <Container variant="fluid">
              <Toolbar>{children}</Toolbar>
            </Container>
          </AppBar>
        </Grid>
        <Grid container>
          <HeaderBar show={showBar} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};
