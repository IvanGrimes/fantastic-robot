import React, { memo, useCallback } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import dequal from 'dequal';
import { Map as MapIcon } from '@material-ui/icons';
import { Toolbar, Wrapper, AppBar, MenuGrid } from './Header.styles';
import { Link } from '../../../../components/Link';
import { HeaderBar } from './HeaderBar';
import { Container } from '../../../../components/Container';
import { useHideOnScroll } from '../../hooks/useHideOnScroll';
import { Hidden } from '../../../../components/Hidden';
import { ClearableInput } from '../../../../components/ClearableInput';

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

type Props = {
  isHeaderVisible: boolean;
  handleSetHeaderVisibility: (visibility: boolean) => void;
  handleSetFullscreenMap: (visibility: boolean) => void;
  searchValue: string;
  handleSearch: (value: string) => void;
};

const _Header = ({
  isHeaderVisible,
  handleSetHeaderVisibility,
  handleSetFullscreenMap,
  searchValue,
  handleSearch,
}: Props) => {
  useHideOnScroll({
    isVisible: isHeaderVisible,
    handleSetVisibility: handleSetHeaderVisibility,
  });
  const handleSetFullscreenMapOn = useCallback(
    () => handleSetFullscreenMap(true),
    [handleSetFullscreenMap]
  );

  return (
    <Wrapper isHeaderVisible={isHeaderVisible}>
      <Grid container>
        <Grid container>
          <AppBar color="primary" position="static">
            <Container>
              <Toolbar>
                <Grid container justify="space-between" alignItems="center">
                  <Grid container item xs={9} md={7} alignItems="center">
                    <Grid item>
                      <Hidden xsDown>
                        <Typography
                          variant="h5"
                          component="span"
                          style={{ marginRight: '16px' }}
                        >
                          CodeName
                        </Typography>
                      </Hidden>
                    </Grid>
                    <Grid item xs={10} sm={8} md={7}>
                      <ClearableInput
                        variant="filled"
                        InputLabelProps={{ style: { display: 'none' } }}
                        InputProps={{
                          inputProps: {
                            style: {
                              padding: '10px',
                              color: '#fff',
                            },
                          },
                        }}
                        onChange={handleSearch}
                        value={searchValue}
                        placeholder="Поиск по названию"
                        debounce={{ wait: 500 }}
                      />
                    </Grid>
                  </Grid>
                  <MenuGrid item container component="nav" md={5}>
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
                  </MenuGrid>
                  <Hidden mdUp>
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="small"
                      onClick={handleSetFullscreenMapOn}
                    >
                      <MapIcon />
                    </Button>
                  </Hidden>
                </Grid>
              </Toolbar>
            </Container>
          </AppBar>
        </Grid>
        <Grid container>
          <HeaderBar />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export const Header = memo(_Header, dequal);
