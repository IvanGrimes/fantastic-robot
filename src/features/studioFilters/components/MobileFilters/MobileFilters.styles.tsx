import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { PaperProps } from '@material-ui/core/Paper';
import { Grid, Paper } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import { em } from 'polished';
import {
  StationFilter as DefaultStudioListFilterStation,
  StudioListFilterStationProps,
} from '../StationFilter';
import {
  InteriorFilter as DefaultStudioListFilterType,
  StudioListFilterTypeProps,
} from '../InteriorFilter';
import {
  PriceTypeFilter as DefaultStudioListFilterPriceSegment,
  StudioListFilterPriceSegmentProps,
} from '../PriceTypeFilter';

export const Wrapper = styled<ComponentType<PaperProps>>(Paper)<{
  isVisible: boolean;
}>`
  ${({ isVisible }) => css`
    && {
      position: absolute;
      box-shadow: none;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      z-index: 1600;
      opacity: ${isVisible ? 1 : 0};
      transform: translate(0, ${isVisible ? 0 : '-10000px'});
      transition: transform linear 0ms ${isVisible ? 0 : 300}ms,
        opacity 300ms linear;
    }
  `}
`;

export const GridWithMargin = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-left: -16px;
  }
`;

export const FilterGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: ${em(16)};
  }
`;

const filterMarginCss = css`
  && {
    margin: 8px 0;
  }
`;

export const StudioListFilterStation = styled<
  ComponentType<StudioListFilterStationProps>
>(DefaultStudioListFilterStation)`
  && {
    margin: 32px 0 0 0;
  }
`;

export const StudioListFilterType = styled<
  ComponentType<StudioListFilterTypeProps>
>(DefaultStudioListFilterType)`
  ${filterMarginCss}
`;

export const StudioListFilterPriceSegment = styled<
  ComponentType<StudioListFilterPriceSegmentProps>
>(DefaultStudioListFilterPriceSegment)`
  ${filterMarginCss}
`;
