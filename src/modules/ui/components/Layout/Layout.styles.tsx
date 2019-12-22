import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Content = styled.div<{ withBar: boolean }>`
  ${({ withBar }) => css`
    display: flex;
    min-height: 100vh;
    margin-top: ${withBar ? 128 : 64}px;
  `};
`;
