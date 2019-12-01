import styled, { css } from 'styled-components';
import { ViewColumn as DefaultViewColumn } from '@material-ui/icons';
import { getGreyPalette } from '../../../../../../theme';

export const ViewColumn = styled(DefaultViewColumn)`
  ${props => {
    const palette = getGreyPalette(props);

    return css`
      && {
        color: ${palette['800']};
      }
    `;
  }}
`;
