import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from '@modules/ui';
import { MenuGrid } from './Menu.styles';

export const Menu = () => (
  <MenuGrid item container component="nav" md={5}>
    <Grid item container component="ul" spacing={6} justify="flex-end">
      <Grid item component="li">
        <Link href="/sign-in">Sign In</Link>
      </Grid>
      <Grid item component="li">
        <Link href="/sign-up">Sign Up</Link>
      </Grid>
    </Grid>
  </MenuGrid>
);
