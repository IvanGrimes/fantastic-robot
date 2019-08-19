import styled from 'styled-components';
import { em } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: ${em(32)};
`;
