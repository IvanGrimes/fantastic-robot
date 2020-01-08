import {
  BaseHeaderBar,
  BaseHeaderBarProps,
} from '@modules/ui/components/Layout/BaseHeaderBar';
import styled from 'styled-components';
import { ComponentType } from 'react';
import { ArrowBackIos } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';

export const HeaderBar = styled<ComponentType<BaseHeaderBarProps>>(
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
