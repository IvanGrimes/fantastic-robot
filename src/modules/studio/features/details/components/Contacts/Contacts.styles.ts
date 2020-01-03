import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: -8px 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 8px 0;
  & > svg {
    font-size: 1.25rem;
    margin-right: 8px;
  }
`;
