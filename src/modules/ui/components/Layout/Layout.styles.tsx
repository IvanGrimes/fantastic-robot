import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Content = styled.div<{ withBar: boolean }>`
  ${({ withBar }) => {
    const margin = withBar ? 120 : 64;

    return css`
      display: flex;
      min-height: calc(100vh - ${margin}px);
      margin-top: ${margin}px;
    `;
  }};
`;
