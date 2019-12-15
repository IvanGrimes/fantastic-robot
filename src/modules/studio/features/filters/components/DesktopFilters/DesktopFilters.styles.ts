import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { ComponentType } from 'react';
import {
  StationFilter as DefaultStudioListFilterStation,
  StudioListFilterStationProps,
} from '../StationFilter';
import {
  InteriorFilter as DefaultStudioListFilterInterior,
  StudioListFilterTypeProps,
} from '../InteriorFilter';
import {
  PriceTypeFilter as DefaultStudioListFilterPriceSegment,
  StudioListFilterPriceSegmentProps,
} from '../PriceTypeFilter';

export const Overlay = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 150;
    background-color: ${transparentize(0.3, '#fff')};
    opacity: ${isVisible ? 1 : 0};
    transform: translate(${isVisible ? '0px, 0' : '-10000px, 0'});
    transition: transform 0ms linear ${isVisible ? 0 : 300}ms,
      opacity 300ms linear;
  `}
`;

const filterCss = css`
  && {
    max-width: 500px;
  }
`;

export const StudioListFilterStation = styled<
  ComponentType<StudioListFilterStationProps>
>(DefaultStudioListFilterStation)`
  ${filterCss}
`;

export const StudioListFilterInterior = styled<
  ComponentType<StudioListFilterTypeProps>
>(DefaultStudioListFilterInterior)`
  ${filterCss}
`;

export const StudioListFilterPriceSegment = styled<
  ComponentType<StudioListFilterPriceSegmentProps>
>(DefaultStudioListFilterPriceSegment)`
  ${filterCss}
`;
