import React, { FunctionComponent } from 'react';
import { AppBar } from '@material-ui/core';
import { Button, Container } from '../../internal';
import { Title, Toolbar } from './Header.styles';

export const Header: FunctionComponent = () => (
  <AppBar position="static">
    <Container>
      <Toolbar>
        <Title variant="h6">Codename</Title>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </Container>
  </AppBar>
);
