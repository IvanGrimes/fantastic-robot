import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from '@modules/ui';
import { routes } from '@utils/routes';
import { MenuGrid } from './Menu.styles';

export const Menu = () => (
  <MenuGrid item container component="nav" md={5}>
    <Grid item container component="ul" spacing={6} justify="flex-end">
      <Grid item component="li">
        <Link to={routes.signIn}>Sign In</Link>
      </Grid>
      <Grid item component="li">
        <Link to={routes.signUp}>Sign Up</Link>
      </Grid>
    </Grid>
  </MenuGrid>
);
