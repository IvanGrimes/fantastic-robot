import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from '@modules/ui';
import { MenuGrid } from './Menu.styles';

export type MenuProps = {
  handleOpenSignUp: () => void;
  handleOpenSignIn: () => void;
};

export const Menu = ({ handleOpenSignIn, handleOpenSignUp }: MenuProps) => (
  <MenuGrid item container component="nav" md={5}>
    <Grid item container component="ul" spacing={6} justify="flex-end">
      <Grid item component="li">
        <Link onClick={handleOpenSignIn}>Sign In</Link>
      </Grid>
      <Grid item component="li">
        <Link onClick={handleOpenSignUp}>Sign Up</Link>
      </Grid>
    </Grid>
  </MenuGrid>
);
