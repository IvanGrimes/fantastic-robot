import styled, { css } from 'styled-components';
import { getSpacing } from '../../../../../theme/spacing';

export const Wrapper = styled.div`
  ${props => {
    const spacing = getSpacing(props);

    return css`
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding: ${spacing * 2}px 0;
      width: 100%;
    `;
  }};
`;

export const Control = styled.div`
  ${props => {
    const spacing = getSpacing(props);
    const horizontalMargin = spacing * 2;

    return css`
      display: flex;
      margin: 0 ${horizontalMargin}px -2px ${horizontalMargin}px;
    `;
  }}
`;
