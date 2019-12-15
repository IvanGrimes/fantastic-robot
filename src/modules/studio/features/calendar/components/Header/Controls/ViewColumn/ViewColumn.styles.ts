import styled, { css } from 'styled-components';
import { ViewColumn as DefaultViewColumn } from '@material-ui/icons';
import { getGreyPalette } from '@theme/palette';
import { ComponentType } from 'react';

export const ViewColumn = styled<ComponentType<{}>>(DefaultViewColumn)`
  ${props => {
    const palette = getGreyPalette(props);

    return css`
      && {
        color: ${palette['700']};
      }
    `;
  }}
`;
