import React, { ComponentType, ReactNode } from 'react';
import { Button, ButtonProps } from '@modules/ui';
import styled from 'styled-components';
import { EmailOutlined as Email } from '@material-ui/icons';
import vk from '../../static/vk.svg';

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const BaseButton = styled<ComponentType<ButtonProps & { icon: ReactNode }>>(
  ({ children, icon, ...props }) => (
    <Button variant="contained" fullWidth {...props}>
      {icon}
      {children}
    </Button>
  )
)`
  & > span > * {
    margin-right: 16px;
  }
`;

export const VkButton = styled<ComponentType<ButtonProps>>(props => (
  <BaseButton icon={<Icon src={vk} />} {...props} />
))`
  && {
    background-color: #4c75a3;
    color: #fff;
    transition: filter 100ms linear;
    &:hover {
      background-color: #4c75a3;
      filter: contrast(1.4);
    }
  }
`;

export const EmailButton = styled<ComponentType<ButtonProps>>(props => (
  <BaseButton {...props} color="primary" icon={<Email />} />
))``;
