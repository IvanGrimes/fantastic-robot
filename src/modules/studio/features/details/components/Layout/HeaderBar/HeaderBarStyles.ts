import * as ui from '@modules/ui';
import styled from 'styled-components';
import { ComponentType } from 'react';
import { ArrowBackIos } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';

const { BaseHeaderBar } = ui

export const HeaderBar = styled<ComponentType<ui.BaseHeaderBarProps>>(
  BaseHeaderBar
)`
  && {
    & > div > div {
      display: flex;
      align-items: center;
    }
  }
`;

export const Icon = styled(ArrowBackIos)`
  && {
    font-size: 18px;
    color: ${grey['800']};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  text-decoration: none;
  margin-left: 4px;
  & > a {
    color: ${grey['800']};
    text-decoration: none;
    font-size: 16px;
    &:hover {
      text-decoration: none;
    }
  }
`;
