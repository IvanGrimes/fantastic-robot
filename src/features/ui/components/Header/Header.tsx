import React, { memo, useCallback, useEffect, useState } from 'react';
import { AppBar, Grid, Switch, Typography } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';
import { Toolbar, Wrapper, MenuGrid } from './Header.styles';
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

type Props = {
  isMapVisible: boolean;
  isHeaderVisible: boolean;
  handleSetMapVisibility: (visibility: boolean) => void;
  handleSetHeaderVisibility: (visibility: boolean) => void;
  handleSetFullscreenMap: (visibility: boolean) => void;
  isFullscreenMap: boolean;
};

const _Header = ({
  isMapVisible,
  handleSetMapVisibility,
  isHeaderVisible,
  handleSetHeaderVisibility,
  handleSetFullscreenMap,
  isFullscreenMap,
}: Props) => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const headerSpring = useSpring({
    top: isHeaderVisible ? '0px' : '-66px',
  });
  const hiddenMapLabelSpring = useSpring({
    opacity: isMapVisible ? 0 : 1,
  });
  const visibleMapLabelSpring = useSpring({
    opacity: isMapVisible ? 1 : 0,
  });
  const handleScroll = useCallback(() => {
    const scrollY = window.pageYOffset;
    const isVisible = prevScrollY > scrollY;

    handleSetHeaderVisibility(isVisible);
    setPrevScrollY(scrollY);
  }, [handleSetHeaderVisibility, prevScrollY]);
  const handleToggleMapVisibility = useCallback(() => {
    handleSetFullscreenMap(false);
    handleSetMapVisibility(!isMapVisible);

    if (window.pageYOffset === 0) {
      handleSetHeaderVisibility(true);
    }
  }, [
    handleSetFullscreenMap,
    handleSetHeaderVisibility,
    handleSetMapVisibility,
    isMapVisible,
  ]);

  useEffect(() => {
    if (!isFullscreenMap) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, isFullscreenMap]);

  return (
    <Wrapper style={headerSpring}>
      <Grid container>
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
                  <MenuGrid item container component="nav" xs={6}>
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
              <Grid
                container
                item
                xs={3}
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
                </Typography>{' '}
              </Grid>
            </Grid>
          </HeaderBar>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export const Header = memo(_Header);
