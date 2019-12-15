import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from '@components/Link';
import { MenuGrid } from './Menu.styles';

const menuData = [
  {
    id: '1',
    name: 'Main',
    link: '#',
  },
  {
    id: '2',
    name: 'Link',
    link: '#',
  },
  {
    id: '3',
    name: 'Link',
    link: '#',
  },
  {
    id: '4',
    name: 'Link',
    link: '#',
  },
];

export const Menu = () => (
  <MenuGrid item container component="nav" md={5}>
    <Grid item container component="ul" spacing={6} justify="flex-end">
      {menuData.map(({ id, link, name }) => (
        <Grid key={id} item component="li">
          <Link href={link} MaterialLinkProps={{ color: 'inherit' }}>
            {name}
          </Link>
        </Grid>
      ))}
    </Grid>
  </MenuGrid>
);
