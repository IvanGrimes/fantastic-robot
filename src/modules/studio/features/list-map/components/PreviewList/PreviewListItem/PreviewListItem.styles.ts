import styled, { css } from 'styled-components';
import { getBreakpoints } from '../../../../../../../theme';

export const Wrapper = styled.div<{ isVisible: boolean }>`
  ${({ isVisible, ...props }) => {
    const { down } = getBreakpoints(props);

    return css`
      position: fixed;
      bottom: 16px;
      left: 50%;
      width: 60%;
      transform: translate(${isVisible ? '-50%, 0px' : '-50%, -10000px'});
      ${down('lg')} {
        width: 80%;
      }
      ${down('md')} {
        width: calc(100% - 32px);
        left: 16px;
        transform: translate(${isVisible ? '0, 0px' : '0, -10000px'});
      }
    `;
  }}
`;
