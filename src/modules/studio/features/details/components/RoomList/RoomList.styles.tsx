import styled, { css } from 'styled-components';
import { Grid, Paper } from '@material-ui/core';
import { PaperProps } from '@material-ui/core/Paper';
import React, { ComponentType } from 'react';
import { Carousel, CarouselProps } from '@modules/ui/components/Carousel';
import { GridProps } from '@material-ui/core/Grid';
import { getShadows } from '@theme/shadows';

export const RoomListCarousel = styled<ComponentType<CarouselProps>>(Carousel)`
  margin: 0 0 36px -10px;
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

export const ContentGrid = styled<ComponentType<GridProps & { color: string }>>(
  ({ color, ...props }) => <Grid {...props} />
)`
  ${({ color }) => css`
    && {
      padding: 5px 10px 10px 10px;
      color: #000;
      border-bottom: 4px solid ${color};
      margin-bottom: 0;
      &:hover {
        text-decoration: none !important;
      }
    }
  `}
`;
