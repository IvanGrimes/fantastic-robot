import React, { memo } from 'react';
import { AppBar, Grid, Typography } from '@material-ui/core';
import { HeaderGrid, Toolbar } from './Header.styles';
import { Link } from '../../../../components/Link';
import { HeaderBar } from './HeaderBar';
import { StudioListFilter } from '../../../studios/components/StudioListFilter';
import { Container } from '../../../../components/Container';

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
    <HeaderGrid container>
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
      <Grid container>
        <HeaderBar>
          <StudioListFilter />
        </HeaderBar>
      </Grid>
    </HeaderGrid>
  );
};

export const Header = memo(_Header);
