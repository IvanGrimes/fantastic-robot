import React, { memo } from 'react';
import { AppBar, Container, Grid, Typography } from '@material-ui/core';
import { Toolbar } from './Header.styles';
import { Link } from '../Link';

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

const _Header = () => {
  return (
    <Grid container>
      <AppBar color="primary" position="static">
        <Container>
          <Toolbar>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h5" component="span">
                  CodeName
                </Typography>
              </Grid>
              <Grid item container component="nav" xs={6}>
                <Grid
                  item
                  container
                  component="ul"
                  spacing={6}
                  justify="flex-end"
                >
                  {menuData.map(({ id, link, name }) => (
                    <Grid key={id} item component="li">
                      <Link
                        href={link}
                        MaterialLinkProps={{ color: 'inherit' }}
                      >
                        {name}
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
  );
};

export const Header = memo(_Header);
