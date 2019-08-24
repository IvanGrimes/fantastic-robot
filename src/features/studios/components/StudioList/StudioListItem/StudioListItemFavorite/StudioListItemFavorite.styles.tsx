import styled from 'styled-components';

export const Icon = styled.i<{ isActive: boolean }>`
  display: flex;
  color: ${({ isActive }) => (isActive ? 'pink' : 'black')};
`;
