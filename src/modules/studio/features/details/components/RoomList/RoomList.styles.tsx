import styled, { css } from 'styled-components';
import { Grid, Paper } from '@material-ui/core';
import { PaperProps } from '@material-ui/core/Paper';
import React, { ComponentType } from 'react';
import { Carousel, CarouselProps } from '@modules/ui/components/Carousel';
import { GridProps } from '@material-ui/core/Grid';
import { Link as DefaultLink, LinkProps } from '@modules/ui/components/Link';
import { getShadows } from '@theme/shadows';

export const RoomListCarousel = styled<ComponentType<CarouselProps>>(Carousel)`
  margin: 24px 0 0 -10px;
  & > .slick-arrow {
    display: none !important;
  }
  & > .slick-dots {
    bottom: -32px;
  }
`;

export const RoomListItem = styled<ComponentType<PaperProps>>(
  ({ className, ...props }) => (
    <div className={className}>
      <Paper {...props} />
    </div>
  )
)`
  ${props => {
    const shadows = getShadows(props);

    return css`
      padding: 5px 10px;
      & > div {
        overflow: hidden;
      }
      &:hover {
        & > div {
          box-shadow: ${shadows[3]};
        }
      }
    `;
  }}
`;

export const ContentGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    padding: 5px 10px 10px 10px;
    color: #000;
    &:hover {
      text-decoration: none !important;
    }
  }
`;

export const Link = styled<ComponentType<LinkProps>>(DefaultLink)`
  && {
    &:hover {
      text-decoration: none;
    }
  }
`;
