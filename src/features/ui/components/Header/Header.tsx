import React, { memo, useCallback } from 'react';
import { AppBar, Grid, Switch, Typography, Button } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';
import dequal from 'dequal';
import { Map as MapIcon } from '@material-ui/icons';
import { Toolbar, Wrapper, MenuGrid, MapSwitchGrid } from './Header.styles';
import { Link } from '../../../../components/Link';
import { HeaderBar } from './HeaderBar';
import { StudioListFilter } from '../../../studios/components/StudioListFilter';
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
  isMapVisible: boolean;
  isHeaderVisible: boolean;
  handleSetMapVisibility: (visibility: boolean) => void;
  handleSetHeaderVisibility: (visibility: boolean) => void;
  handleSetFullscreenMap: (visibility: boolean) => void;
  searchValue: string;
  handleSearch: (value: string) => void;
};

const _Header = ({
  isMapVisible,
  handleSetMapVisibility,
  isHeaderVisible,
  handleSetHeaderVisibility,
  handleSetFullscreenMap,
  searchValue,
  handleSearch,
}: Props) => {
  useHideOnScroll({ handleSetVisibility: handleSetHeaderVisibility });
  const headerSpring = useSpring({
    top: isHeaderVisible ? '0px' : '-66px',
  });
  const hiddenMapLabelSpring = useSpring({
    opacity: isMapVisible ? 0 : 1,
  });
  const visibleMapLabelSpring = useSpring({
    opacity: isMapVisible ? 1 : 0,
  });
  const handleSetFullscreenMapOn = useCallback(
    () => handleSetFullscreenMap(true),
    [handleSetFullscreenMap]
  );
  const handleToggleMapVisibility = useCallback(() => {
    handleSetFullscreenMap(false);
    handleSetMapVisibility(!isMapVisible);

    if (window.pageYOffset > 0) {
      handleSetHeaderVisibility(true);
    }
  }, [
    handleSetFullscreenMap,
    handleSetHeaderVisibility,
    handleSetMapVisibility,
    isMapVisible,
  ]);

  return (
    <Wrapper style={headerSpring}>
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
                            },
                          },
                        }}
                        onChange={handleSearch}
                        value={searchValue}
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
          <HeaderBar>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <StudioListFilter />
              </Grid>
              <MapSwitchGrid
                container
                item
                xs={5}
                alignItems="center"
                justify="flex-end"
              >
                <Typography
                  component={animated.div}
                  variant="caption"
                  style={visibleMapLabelSpring}
                >
                  Скрыть карту
                </Typography>
                <Switch
                  color="default"
                  onClick={handleToggleMapVisibility}
                  checked={isMapVisible}
                />
                <Typography
                  component={animated.div}
                  variant="caption"
                  style={hiddenMapLabelSpring}
                >
                  Показать карту
                </Typography>
              </MapSwitchGrid>
            </Grid>
          </HeaderBar>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export const Header = memo(_Header, dequal);
