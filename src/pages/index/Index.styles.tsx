import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import { getBreakpoints } from '../../theme';
import {
  StudioList as DefaultStudioList,
  StudioListProps,
} from '../../features/studios/components/StudioList';

export const ContentGrid = styled<ComponentType<GridProps>>(Grid)`
  ${props => {
    const { down } = getBreakpoints(props);

    return css`
      ${down('md')} {
        && {
          flex-wrap: wrap-reverse;
        }
      }
    `;
  }}
`;

export const StudioList = styled<ComponentType<StudioListProps>>(
  DefaultStudioList
)`
  && {
    margin-top: 120px;
  }
`;
