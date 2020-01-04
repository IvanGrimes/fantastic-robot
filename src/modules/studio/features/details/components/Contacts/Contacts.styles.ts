import styled from 'styled-components';

export const List = styled.ul`
  padding: 0 0 4px 0;
  margin: -8px 0 -8px 2px;
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
